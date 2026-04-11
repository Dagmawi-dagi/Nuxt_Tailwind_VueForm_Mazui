import { Op }  from 'sequelize'
import { getQuery, createError } from 'h3';

export const commonController = (event, model) => {

  const create = async (createObject) => {
    return model.create(createObject);
  };

  const get = async () => {
      /**
     * Advanced global GET handler for Sequelize models (MySQL safe)
     * Supports: filtering with operators, sorting, pagination, search, field selection, include/populate
     */

      // ------Example Requests----------
      // Purpose	Example URL
      // Pagination	/api/users?page=2&limit=10
      // Sorting	/api/users?sort=-createdAt,name
      // Field selection	/api/users?fields=id,name,email
      // Include relations	/api/users?include=profile,roles
      // Filter with operator	/api/users?age[gte]=18&age[lte]=30
      // IN / NOT IN	/api/users?id[in]=1,2,3
      // LIKE search	/api/users?name[like]=john
      // Between	/api/orders?price[between]=100,500
      // Full-text search	/api/users?search=smith

      const query = getQuery(event)

      // 1️⃣ Pagination
      const page = parseInt(query.page) || 1
      const limit = parseInt(query.limit) || 10
      const offset = (page - 1) * limit

      // 2️⃣ Sorting (sort=field,-createdAt)
      let order = []
      if (query.sort) {
        order = query.sort.split(',').map((field) => {
          if (field.startsWith('-')) return [field.substring(1), 'DESC']
          return [field, 'ASC']
        })
      }

      // 3️⃣ Field selection (fields=name,email)
      let attributes
      if (query.fields) {
        attributes = query.fields.split(',')
      }

      // 4️⃣ Include / populate (include=profile,posts)
      let include = []
      if (query.include) {
        const includeModels = query.include.split(',')
        include = includeModels
          .map((name) => {
            const association = model.associations[name]
            if (!association) return null
            return { model: association.target, as: name }
          })
          .filter(Boolean)
      }

      // 5️⃣ Filtering with operators
      const where = {}
      const operatorMap = {
        gt: Op.gt,
        gte: Op.gte,
        lt: Op.lt,
        lte: Op.lte,
        ne: Op.ne,
        in: Op.in,
        notIn: Op.notIn,
        like: Op.like,
        notLike: Op.notLike,
        between: Op.between,
        notBetween: Op.notBetween
      }

      for (const [key, value] of Object.entries(query)) {
        if (['page', 'limit', 'sort', 'fields', 'include', 'search'].includes(key)) continue

        // e.g. price[gte]=100
        const match = key.match(/^(\w+)\[(\w+)\]$/)
        if (match) {
          const field = match[1]
          const operator = match[2]

          if (operatorMap[operator]) {
            let val = value
            // handle array-like values (comma-separated)
            if (['in', 'notIn', 'between', 'notBetween'].includes(operator)) {
              val = Array.isArray(value) ? value : value.split(',')
            }

            if (!where[field]) where[field] = {}
            where[field][operatorMap[operator]] = val
          }
        } else {
          // Simple equality
          where[key] = value
        }
      }

      // 6️⃣ Text search across all STRING columns
      if (query.search && model.rawAttributes) {
        const searchFields = Object.keys(model.rawAttributes).filter(
          (key) => model.rawAttributes[key].type?.key === 'STRING'
        )

        if (searchFields.length > 0) {
          where[Op.or] = searchFields.map((field) => ({
            [field]: { [Op.like]: `%${query.search}%` }
          }))
        }
      }

      // 7️⃣ Execute query with MySQL pagination safety
      return await model.findAndCountAll({
        where,
        include,
        attributes,
        order,
        offset,
        limit,
        distinct: true,   // ✅ Fix count for MySQL with JOINs
        subQuery: false    // ✅ Prevent subquery issues with pagination + include
      })
      
  }

  const updateOne = async (id, updateData) => {
    if (!id) {
      throw createError({ statusCode: 400, statusMessage: 'Invalid update id' });
    }

    if (!updateData || Object.keys(updateData).length === 0) {
      throw createError({ statusCode: 400, statusMessage: 'Missing update data' });
    }

    const doc = await model.findByPk(id);

    if (!doc) {
      throw createError({ statusCode: 404, statusMessage: 'Document not found' });
    }

    // Update fields
    await doc.update(updateData);

    // Return updated record
    return doc;
  };

  const updateMany = async (where, updateData) => {
    
    if (!where || Object.keys(where).length === 0) {
      throw createError({ statusCode: 400, message: 'Missing conditions for update' });
    }
    
    if (!updateData || Object.keys(updateData).length === 0) {
      throw createError({ statusCode: 400, message: 'Missing update data' });
    }

    // Perform the bulk update
    const [affectedCount] = await model.update(updateData, {
      where: where
    });

    if (affectedCount === 0) {
      throw createError({ statusCode: 404, message: 'No records found matching the where conditions to update' });
    }

    // Return updated records
    return await model.findAll({
      where: where,
      attributes: Object.keys(model.rawAttributes) // Return all columns
    });
  };

  const deleteOne = async (id)=>{

    if (!id) {
      throw createError({ statusCode: 400, statusMessage: 'Invalid delete id' });
    }

    const doc = await model.findByPk(id);

    if (!doc) {
      throw createError({ statusCode: 404, statusMessage: 'doc not found' });
    }

    // Soft delete (paranoid enabled in model)
    return await doc.destroy();
  }

  const deleteMany = async (where) => {
    if (!where || Object.keys(where).length === 0) {
      throw createError({ statusCode: 400, statusMessage: 'Missing conditions for delete' });
    }

    // Find all matching records first
    const docs = await model.findAll({ where });

    if (!docs.length) {
      throw createError({ statusCode: 404, statusMessage: 'No documents found to delete' });
    }

    // Soft delete (paranoid enabled in model)
    await Promise.all(docs.map(doc => doc.destroy()));

    return {
      deletedCount: docs.length,
      message: `${docs.length} record(s) deleted successfully`
    };
  };


  return {
    create,
    get,
    updateOne,
    updateMany,
    deleteOne,
    deleteMany
  };
};
import modelsRefs from '../database/models/modelsRefs';
import sequelize from '../database/sequelizeConnection'

export default defineNitroPlugin(async (nitroApp) => {
   try {
     const models = {
       test: modelsRefs.test.model,
       user: modelsRefs.user.model,
     };

     // Initialize associations
     Object.values(models).forEach(model => {
       if (model.associate) {
         model.associate(models); 
       }
     });
     
     await sequelize.authenticate();
     console.log('✨✨✨ MySQL connected successfully ✨✨✨'  );
     await sequelize.sync(); //  with options {force: true} it will delete and recreate the talbes  
     console.log('✨✨✨Database synced ✨✨✨');
   } catch (error) {
     console.error(' Database connection error:', error);
   }
})
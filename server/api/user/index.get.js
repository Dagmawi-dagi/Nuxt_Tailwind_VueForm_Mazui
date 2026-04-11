import modelsRef from '../../database/models/modelsRefs'
import withErrorHandler from '../../utils/catchAsync'
import { commonController } from '../../service/commonCrud'

export default withErrorHandler( async(event) => {
 const result =  await commonController(event,modelsRef.user.model).get()
   return{
     status: 'success',
     count:result.rows.length,
     data: result.rows
   }
})
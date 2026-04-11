import modelsRef from '../../database/models/modelsRefs'
import withErrorHandler from '../../utils/catchAsync'
import { commonController } from '../../service/commonCrud'

export default withErrorHandler( async(event) => {
 const result =  await commonController(event,modelsRef.test.model).get()
   return{
     status: 'success',
     data: result.rows
   }
})
import modelsRef from '../../database/models/modelsRefs'
import withErrorHandler from '../../utils/catchAsync'
import { commonController } from '../../service/commonCrud'

export default withErrorHandler( async(event) => {
 const id = event.context.params?.id;
 const result =  await commonController(event,modelsRef.user.model).deleteOne(id)
   return{
     status: 'success',
     data: result
   }
})
export default (state={loading:0,error:0},action)=>
{
    switch(action.type)
    {
        case 'USER_REGISTER':{
            return{
                loading:1
            }
        }
        case 'USER_REGISTER_SUCCESS':{
            return{
                error:0,
                userInfo:action.payload
            }
        }
        case 'USER_REGISTER_FAIL':{
            return{
                error:action.payload
            }
        }
        case 'USER_SIGNIN' :{
            return{
                loading:1
            }
        }
        case 'USER_SIGNIN_SUCCESS':{
            return{
                error:0,
                userInfo:action.payload
            }
        }
        case 'USER_SIGNIN_FAIL':{
            return{
                error:1
            }
        }
        case 'USER_SIGNOUT':{
            return {
                userInfo:undefined
            }
        }
        default:
            return state;
    }
}
export default (state={opencompose:0},action)=>{

    switch(action.type)
    {
        case 'SET__COMPOSE':{
           return action.payload;
            
        }
        case 'EMAIL__SENT':
            return state;
        case "EMAIL__FAIL":
            return{
               error:action.payload
            }

        default:
            return state;
    }
}
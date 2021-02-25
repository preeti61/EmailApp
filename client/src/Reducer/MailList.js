export default (state=[],action)=>{

    switch(action.type)
    {
         case 'FETCH__MAIL__REQUEST':
             return{
                 loading:1
             }
        case 'FETCH__MAIL__SUCCESS':
            return  action.payload;
            
        case 'FETCH__MAIL__FAIL':
            return{
                error:action.payload
            }
            default:
                return state;
    }
}
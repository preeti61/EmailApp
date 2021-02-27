export default (state=[],action)=>{

    switch(action.type)
    {
        case 'FETCHING_SENT_MAIL':
            return {
                loading:1
            }
        case 'FETCH__SENTMAIL__SUCCESS':
            return action.payload
        default:
            return state;
    }
}
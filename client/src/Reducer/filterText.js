export default(state='',action)=>{
    switch(action.type)
    {
        case 'SET_TEXT_FILTER':
            return action.payload;
        default:
            return state;
    }
}
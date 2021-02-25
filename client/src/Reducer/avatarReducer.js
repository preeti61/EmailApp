export default (state={},action)=>{

    switch(action.type)
    {
        case "AVATAR_CHANGE_REQUEST":
         return state;
        case "AVATAR_CHANGE_SUCCESS":
            return state
        case "AVATAR_CHANGE_FAIL":
            return action.payload
            
        case "AVATAR_FETCH_REQUEST":
            return state
        case "AVATAR_FETCH_SUCCESS":
            return action.payload
            
        case "AVATAR_FETCH_FAIL":
            return state;
            
        default:
            return state;
    }
};
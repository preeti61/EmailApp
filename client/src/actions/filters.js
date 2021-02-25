export const filtered=(text)=>async(dispatch,getState)=>{

    dispatch({
        type:"SET_TEXT_FILTER",
        payload:text
    })

    

}
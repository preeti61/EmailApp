
import axios from "axios";
import {arrayBufferToBase64} from '../Filter/filter'
export const AddAvatar=(fd)=>async(dispatch,getState)=>{
    dispatch({
        type:"AVATAR_CHANGE_REQUEST"
    })
    
    const {userData}=getState();
   
    const {userInfo}=userData;
    try{
        const {data}=await axios.post('/api/user/avatar',fd,{
            headers:{
                authorization:`Bearer ${userInfo.token}`
            }
        });
          dispatch({
            type:"AVATAR_CHANGE_SUCCESS"
        })
       
       
    }
    catch(e)
    {
        dispatch({
            type:"AVATAR_CHANGE_FAIL",
            
        })
    }
  



}
export const FetchAvatar=()=>async(dispatch,getState)=>{
    dispatch({type:'AVATAR_FETCH'})
    const {userData}=getState();

   
    const {userInfo}=userData;
    try{
        const {data}=await axios.get(`/api/user/avatar/${userInfo._id}`,{
            responseType:'arraybuffer',
            headers:{
                authorization:`Bearer ${userInfo.token}`
              
            }
           
          
        });
        
          const src=`data:image/png;base64,${arrayBufferToBase64(data)}`;
        
        dispatch({type:'AVATAR_FETCH_SUCCESS',payload:src})
    
        localStorage.setItem('avatar',JSON.stringify(src))
    }
    
    catch(e)
    {
        dispatch({
            type:'AVATAR_FETCH_FAIL',
            payload:e.message
        })
    }
}
import axios from "axios"
import {filterReducer} from '../Filter/filter.js';
import moment from 'moment';
export const opencompose=()=>async(dispatch)=>{
  
   dispatch({
        type:'SET__COMPOSE',
        payload:1
    })
    
}
export const closecompose=()=>async(dispatch)=>{
    dispatch({
        type:'SET__COMPOSE',
        payload:0
    })
}


export const sendMail=(to,sub,body)=>async(dispatch,getState)=>{
    
    const {userData}=getState();
   
    const {userInfo}=userData;
  const time=moment().format("MMM Do YY,h:mm");
    try{
        const {data}=await axios.post('/api/email/create',{to,sub,body,time},{
            headers:{
                authorization:`Bearer ${userInfo.token}`
            }
        })
        dispatch({
            type:"EMAIL__SENT"
        })
     dispatch({
         type:"SET__COMPOSE",
         payload:0
     })
    }
   
    catch(e)
    {
        console.log(e.response)
        let message=e.response.statusText
        if(e.response.status===404)
        message="The user is not registered with the app"
        dispatch({
            type:"EMAIL__FAIL",
            payload:message
        })
    }
   
}
export const FetchMail=()=>async(dispatch,getState)=>{
    dispatch({
        type:"FETCH__MAIL__REQUEST"
    })
    
    const {userData}=getState();
   
    const {userInfo}=userData;
    try{
       let {data}=await axios.get('/api/email/getMail',{
            headers:{
                authorization:`Bearer ${userInfo.token}`
            }
        });
      const newdata=filterReducer(data);
      
        dispatch({
            type:"FETCH__MAIL__SUCCESS",
            payload:data
        })
  
        localStorage.setItem('mailList',JSON.stringify(data))
        
    }
    catch(e)
    {
        dispatch({
            type:'FETCH__MAIL__FAIL',
            payload:e
        })
    }
}

export const FetchSendMail=()=>async(dispatch,getState)=>{

    dispatch({type:'FETCHING_SENT_MAIL'})

    const {userData}=getState();
   
    const {userInfo}=userData;
    try{
       let {data}=await axios.get('/api/email/getSentMail',{
            headers:{
                authorization:`Bearer ${userInfo.token}`
            }
        });
      const newdata=filterReducer(data);
      
        dispatch({
            type:"FETCH__SENTMAIL__SUCCESS",
            payload:data
        })
  
        localStorage.setItem('sentmailList',JSON.stringify(data))
}
catch(e)
    {
        dispatch({
            type:'FETCH__MAIL__FAIL',
            payload:e
        })
    }
}
export const deleteMail=(id)=>async(dispatch,getState)=>{

    dispatch({
        type:'EMAIL_DELETE_REQUEST'
    })

    const {userData}=getState();
   console.log(id)
    const {userInfo}=userData;
    try{
        const {data}=axios.get(`/api/email/delete/${id}`,{
            headers:{
                authorization:userInfo.token
            }
        })
        dispatch({
            type:'DELETE_SUCCESS'
        })

      
    }
    catch(e)
    {
        dispatch({type:'DELETE_FAIL',
                     payload:`Request failed with status ${e.response.status}`})
    }
}
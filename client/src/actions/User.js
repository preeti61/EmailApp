import axios from 'axios'

export const RegisterUser=(email,password,name)=>async(dispatch)=>{

      

    dispatch({type:"USER REGISTER"});
   
    try{
        const {data}=await axios.post('/api/user/register',{email,password,name})
        dispatch({
            type:'USER_REGISTER_SUCCESS',
            payload:data
        })
        localStorage.setItem('userInfo',JSON.stringify(data))
    }
    catch(e){
     
        let error;
        if(e.response.status===409)
            error="Email Already registered"
        else
        error="Register Failed !!!"
        console.log(error)
        dispatch({
            type:'USER_REGISTER_FAIL',
            payload:error
        })
    }
   
}
export const signin=(email,password)=>async(dispatch)=>{
    dispatch({type:"USER_SIGNIN"});
    try{
        const {data}=await axios.post('/api/user/signin',{email,password})
        dispatch({
            type:'USER_SIGNIN_SUCCESS',
            payload:data
        })
        localStorage.setItem('userInfo',JSON.stringify(data))
    }
    catch(e){
      
        dispatch({
            type:'USER_SIGNIN_FAIL'
        })
    }
}


export const signOut=()=>async(dispatch)=>{
    dispatch({type:'USER_SIGNOUT'})
    localStorage.removeItem('userInfo');
    localStorage.removeItem('mailList');
    localStorage.removeItem('avatar');
}
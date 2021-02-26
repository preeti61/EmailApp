import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {RegisterUser} from '../actions/User.js';
import {useForm} from 'react-hook-form';
import { Link } from 'react-router-dom';
function Register(props) {
    
     const dispatch = useDispatch();
     const { register, handleSubmit, watch, errors } = useForm();
   


     const {userInfo,error}=useSelector(state => state.userData);  

    
    const onsubmit=(data)=>{
      
      
        const name=data.name;
        const email=data.email;
        const password=data.password;
        
       dispatch(RegisterUser(email,password,name));
       
    }

    
    useEffect(()=>{
        if(userInfo)
            props.history.push("/user")
       },[props.history,
           userInfo])
   
    return (
        <div className="signin" >
      
            <form className="regisform" onSubmit={handleSubmit(onsubmit)}>
                <h1>Email</h1>
            <p className="error">{error}</p>
            
                <div className="label__signin"> 
                <h2>Register</h2>
                </div>
                <div className="label__signin">
                <label>Name</label>
                <input type="text" name="name" ref={register({ required: true })}/>
                </div>
                {errors.name && <span className="error1">This field is required</span>}
                <div className="label__signin">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" ref={register({ required: true })}/>
                </div>
                {errors.email && <span className="error1">This field is required</span>}
                <div className="label__signin">
                <label>Password</label>
                <input type="password" name="password" ref={register({ required: true })}/>
                </div>
                {errors.password && <span className="error1">This field is required</span>}
                <div className="label__signin">
             
                 <button className="primary" >Register</button>
                   
               </div>
               <h4>Already have an Account? <Link to="/">Sign In</Link></h4>
            </form>
        </div>
    )
}

export default Register

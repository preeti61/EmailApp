import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import '../styles/Signin.css';
import {Link, Redirect} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {signin} from '../actions/User.js';
function Signin(props) {
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, errors } = useForm();
    const {error,userInfo}= useSelector(state => state.userData)
 
    const onsubmit=(data)=>{
        const email=data.email;
        const password=data.password;
        console.log(email,password)
       dispatch(signin(email,password));
      
      
    }
    useEffect(()=>{
        if(userInfo)
            props.history.push("/user")
       },[props.history,
           userInfo])
    return (
        <div className="signin">
            <form className="signinform"   >
                <h1>Email App</h1>
              {error && <p className="error">Invalid username or password</p>}
                <div className="label__signin"> 
                <h2>SignIn</h2>
                </div>
                
                <div className="label__signin">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" ref={register({ required: true })}/>
                {errors.email && <span className="error1">This field is required</span>}
                </div>
               
                <div className="label__signin" >
                <label>Password</label>
                <input type="password" name="password" ref={register({ required: true })}/>
                {errors.password && <span className="error1">This field is required</span>}
                </div>
               <div className="label__signin" >
                  <button className="primary" onClick={handleSubmit(onsubmit)} >SignIn</button>
               </div>

               <div><h4>New User? <Link to='/register'>Register</Link></h4></div>
            </form>
        </div>
    )
}

export default Signin;

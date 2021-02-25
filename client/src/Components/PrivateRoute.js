import React from 'react'
import { Redirect, Route } from 'react-router'
import Header from './Header'
import Sidebar from './Sidebar';
import {useSelector} from 'react-redux';



function PvtRoute({
component:Component,
...rest}) {
  
    const userInfo  = useSelector(state =>state.userData.userInfo)
    return (
       
            <Route {...rest} component={(props)=>{
                return userInfo?(
                
                    <div>
                        <Header/>
                        <div className="app__body">
                            <Sidebar/>
                            <Component {...props}/>
                            </div>
                        </div>):(<Redirect to="/"/>)
                
            }}/>
            
      
    )
}

export default PvtRoute;

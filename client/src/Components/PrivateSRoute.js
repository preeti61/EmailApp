import React from 'react'
import {useSelector} from 'react-redux';
import { Redirect, Route } from 'react-router';
function PrivateSRoute({component:Component ,...rest}) {
    const userInfo  = useSelector(state =>state.userData.userInfo)
    return (
        <Route {...rest} component={(props)=>{
             return userInfo?
        ( <div className="app__body">
                <Component {...props}/>
             </div>):<Redirect to="/"/>
        }}/>
    )
}

export default PrivateSRoute;

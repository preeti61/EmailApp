import React from 'react'
import Signin from './Components/Signin.js';
import Register from './Components/Register.js';
import {useEffect,useState} from 'react';
import   {SendList}  from './Components/sendList.js';
import {useSelector} from 'react-redux';
import './index.css';


import {Route,BrowserRouter,Link,Switch} from 'react-router-dom';

import EmaiList from './Components/EmaiList.js';
import PvtRoute from './Components/PrivateRoute.js';
import PvtSRoute from './Components/PrivateSRoute.js';
import Mail from './Components/Mail.js';

import  ChangeAvatar from './Components/avatar.js';


 function App() {
 
   const userInfo=useSelector(state => state.userData.userInfo);  
     
   return(
   <div className="app">
   <BrowserRouter>
   
        <div>
       <Switch>
      
       <Route path="/register" component={Register} exact={true}/>
          <PvtRoute path="/user" component={EmaiList} exact={true}/>
          <PvtRoute path="/mail/:id" component={Mail} exact={true}/>
          <PvtRoute path="/changeavatar" component={ChangeAvatar} exact={true}/>
          <PvtRoute path="/sentmails"component={SendList}exact={true}/>
          <Route path="/"  component={Signin} exact={true}/>
         
          </Switch>
        </div>
       
      
        
        </BrowserRouter>
  </div>
           
        
   )            
    }


export default App;

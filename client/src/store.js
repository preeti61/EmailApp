import {applyMiddleware, compose, createStore,combineReducers} from 'redux';
import mailReducer from './Reducer/mail.js'
import thunk from 'redux-thunk';
import userManager from './Reducer/user.js';
import mailListReducer from './Reducer/MailList.js';
import avatarReducer from './Reducer/avatarReducer.js';
import filterReducer from './Reducer/filterText.js'
const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
const initialState={opencompose:0,
    userData:{
        userInfo:localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null},
       mailList:localStorage.getItem('mailList')?JSON.parse(localStorage.getItem('mailList')):[],
        avatar:localStorage.getItem('avatar')?JSON.parse(localStorage.getItem('avatar')):null,
        filterText:''
    }
    
const store=createStore(combineReducers({
   opencompose:mailReducer,
    userData:userManager,
    mailList:mailListReducer,
    filterText:filterReducer,
    avatar:avatarReducer
   

}),initialState,composeEnhancer(applyMiddleware(thunk)));
export default store;
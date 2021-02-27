import React,{useEffect} from 'react';
import '../styles/EmailList.css';
import {Checkbox,IconButton} from '@material-ui/core';
import {useDispatch,useSelector} from 'react-redux';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import EmailRow from './EmailRow'
import Message from '../Components/Message';
import Compose from './Compose';
import {FetchSendMail} from '../actions/mail.js';
export function SendList(props) {
    const sendList=useSelector(state=>state.sentMailList)
    const userInfo=useSelector(state=>state.userData.userInfo);
    const dispatch=useDispatch();
  
useEffect(() => {
   dispatch(FetchSendMail());
 
}, [userInfo])
     


    return (
        <div className="email__list">
            <div className="email__list__settings">
               <div className="left">
                 <Checkbox/>
                 <IconButton>
                     <ArrowDropDownIcon/>
                 </IconButton>
                 <IconButton>
                 <RedoIcon/>
                 </IconButton>
                 <IconButton>
                     <MoreVertIcon/>
                 </IconButton>
               </div>
            </div>
         
            <div className="email__list__section">
         
            
                {sendList.length?( sendList.map(({subject,body,time,_id})=>{
                   
                       return <EmailRow key={_id} subject={subject} body={body} id={_id} props={props} time={time} redirect={"sentmails" } />
                })):
                (
                    <div>
                  <Message class={"primary"}
                 message={`Welcome ${userInfo.name}. You haven't sent any mail yet.`}
                ins={"Click on compose"}/>
                    </div>
            
                )}
                   <Compose/>
              </div>
            
        </div>
    )
}


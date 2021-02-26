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
import { FetchMail } from '../actions/mail';
function EmaiList(props) {
    const mailList=useSelector(state=>state.mailList)
    const userInfo=useSelector(state=>state.userData.userInfo);
    const dispatch=useDispatch();
  
useEffect(() => {
   dispatch(FetchMail());
 
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
         
            
                {mailList.length?( mailList.map(({to,from,subject,body,time,_id})=>{
                   
                       return <EmailRow key={_id} subject={subject} body={body} id={_id} props={props} time={time} />
                })):
                (
                    <div>
                  <Message class={"primary"}
                 message={`Welcome ${userInfo.name}. Start by sending  email to a registered user.`}
                ins={"Click on compose"}/>
                    </div>
            
                )}
                   <Compose/>
              </div>
            
        </div>
    )
}

export default EmaiList

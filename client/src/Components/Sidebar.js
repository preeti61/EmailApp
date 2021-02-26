import React from 'react';
import {Button, IconButton} from '@material-ui/core';
import {useDispatch,useSelector} from 'react-redux'
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import SidebarOption from './SidebarOption.js';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import PhoneIcon from '@material-ui/icons/Phone';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import ChatIcon from '@material-ui/icons/Chat';
import '../styles/Sidebar.css';
import { Link } from 'react-router-dom';
import {opencompose} from '../actions/mail.js';
function Sidebar() {
  const userInfo=useSelector(state => state.userData.userInfo)
  const mailList=useSelector(state => state.mailList)
          const dispatch = useDispatch();
     const setcompose=()=>{
       dispatch(opencompose());
     }
    return (
        <div className="sidebar" id="menu__bar">
        <Button className="compose" onClick={setcompose}  startIcon={<AddIcon/>} >COMPOSE</Button>
        <br></br>
         <SidebarOption Icon={InboxIcon} num={mailList.length} text="Input" selected={true}/>
         <SidebarOption Icon={DraftsIcon} num={0} text="Drafts"/>
         <SidebarOption Icon={SendIcon} num={0} text="Sent"/>
         <SidebarOption Icon={StarBorderIcon} num={0} text="Starred"/>
         <SidebarOption Icon={LabelImportantIcon} num={0} text="Important"/>
         <div className="sidebar__footer">
             <IconButton>
              <PhoneIcon/>
             </IconButton>
             <IconButton>
               <VideoCallIcon/>
             </IconButton>
             <IconButton>
               <ChatIcon/>
             </IconButton>
         </div>
        </div>
    )
}

export default Sidebar;

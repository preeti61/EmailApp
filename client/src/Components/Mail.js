import React from 'react'
import '../styles/Mail.css';
import {useSelector} from 'react-redux'
import {IconButton} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DeleteIcon from '@material-ui/icons/Delete';
import ErrorIcon from "@material-ui/icons/Error";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import EmailIcon from '@material-ui/icons/Email';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Link} from 'react-router-dom';

function Mail(props) {
     
    const redirect=props.location.search?props.location.search.split('?')[1]:'/';
   const userInfo = useSelector(state => state.userData.userInfo);
   const sendList=useSelector(state=>state.sentMailList)
   let curMail=(sendList.find((mail)=>{
       return mail._id===props.match.params.id;
        
    }))
  

  
    return (
        <div className="mail">
             <div className="mail__icons">
                  <IconButton onClick={()=>{props.history.push(`/${redirect}`)}}>
                      <ArrowBackIcon />
                  </IconButton>
                  <IconButton>
                      <DeleteIcon/>
                  </IconButton>
                  <IconButton>
                    <ErrorIcon/>
                  </IconButton>
                  <IconButton>
                  <CheckCircleIcon/>
                  </IconButton>
                  <IconButton>
                      <EmailIcon/>
                  </IconButton>
                  <IconButton>
                      <MoreVertIcon/>
                  </IconButton>
                 </div>  
                 <div className="mail__body">
                     <div className="mail__title">
                     <h2>{curMail.subject}</h2>
                     <p>({curMail.from})</p>
                     </div>
                     <div className="mail__content">
                           <p>{curMail.body}</p>
                     </div>

                 </div>
                 
        </div>
    )
}

export default Mail

import { IconButton,Checkbox } from '@material-ui/core'
import React from 'react'
import '../styles/EmailRow.css';
import {useDispatch} from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { deleteMail,FetchMail, FetchSendMail } from '../actions/mail';
function EmailRow({id,body,subject,time,props,redirect}) {

     const dispatch = useDispatch();
    const goToMail=()=>{
        props.history.push(`/mail/${id}?${redirect}`)
     
    }

    const deletethis=async()=>{
      await dispatch(deleteMail(id));
      await dispatch(FetchMail());
         await dispatch(FetchSendMail());
    }
   
    return (
        
         <div  className="email__row__parent">
  
          <div className="icons">
                      <IconButton onClick={deletethis}>
                      <DeleteIcon/>
                      </IconButton>
                     
              </div>
                    
    <div className="email__row" onClick={goToMail}>
                      <IconButton>
                       <LabelImportantIcon/>
                      </IconButton>
             <div class="email__row__subject">
                  <h4>{subject}</h4>
                  <div className="row__body">
                  <strong>This is title </strong>

                   <p>{body}</p> 
                  
                   </div>
                  <strong>{time}</strong>
              </div>
            </div>
        </div>
    )
}

export default EmailRow

import React from 'react'
import {useSelector,useDispatch }from 'react-redux';
import {closecompose, FetchMail, sendMail} from '../actions/mail';
import CloseIcon from '@material-ui/icons/Close';
function Compose() {
    const opencompose = useSelector(state => state.opencompose)
const dispatch = useDispatch();
const setcompose=()=>{
    dispatch(closecompose());
}

   
    return (
     
                 <div className={opencompose?"email__compose__show":"email__compose"}>
                 <form onSubmit={async(e)=>{
                   e.preventDefault();
                  await dispatch(sendMail(e.target.elements.to.value,e.target.elements.sub.value,e.target.elements.body.value));
                   e.target.elements.to.value=""
                   e.target.elements.sub.value=""
                   e.target.elements.body.value=""
                   await dispatch(FetchMail())
                 }}>
                   
                         <CloseIcon className="compose__close" onClick={setcompose}/>
                    {opencompose.error &&<p className="error">{opencompose.error}</p>}
                     <div className="label">
                    <label htmlFor="to">To</label>
                     <input type="email" name="to" required={true}/>
                     </div>
                     <div className="label">
                     <label htmlFor="sub" >Subject</label>
                     <input type="text"  name="sub" required={true }/>
                     </div>
                     <div className="label">
                     <label htmlFor="body" >Body</label>
                      <textarea type="text" name="body" required={true} />
                     </div>
                     
                     <div className="form__submit">
                       <button>Send</button>
                     </div>
                     
                 </form>
              </div>
        
    )
}

export default Compose

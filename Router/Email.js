import Mail from '../Models/Email.js';
import express from 'express';
const EmailRouter=express.Router();
import {isAuth} from '../Auth.js'
import User from '../Models/User.js';
EmailRouter.post('/create',isAuth,async(req,res)=>{
       

    const user=await User.findOne({email:req.body.to})
    if(!user)
    return res.status(404).send( new Error("The email does not exist"))
    try{ 
    const mail =new Mail({
      to:req.body.to,
      subject:req.body.sub,
      body:req.body.body,
      from:req.user.email,
      time:req.body.time
    });
       const email=await mail.save();
        res.send(email)
    }
    catch(e)
    {   
      console.log(e)
        res.status(500).send(e);
    }
})




EmailRouter.get('/getMail',isAuth,async(req,res)=>{

 
  try{
    const emailList=await Mail.find({to:req.user.email})
    res.send(emailList)
  }
  catch(e)
  {
    res.status(500).send(e)
  }
 
})

EmailRouter.get('/getSentMail',isAuth,async(req,res)=>{

 
  try{
    const emailList=await Mail.find({from:req.user.email})
    res.send(emailList)
  }
  catch(e)
  {
    res.status(500).send(e)
  }
 
})
EmailRouter.get('/delete/:id',async(req,res)=>{

  const id=req.params.id;

  try{
    const email=await Mail.findOneAndDelete({_id:id});
    if(!email)
    return res.status(404).send( new Error("The email does not exist"))
    res.send(email)
  }
  catch(e)
  {
    res.status(500).send()
  }
})
export default EmailRouter;
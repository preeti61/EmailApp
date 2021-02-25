import User from '../Models/User.js';
import express from 'express';
import bcrypt from 'bcryptjs';
import {generateToken,isAuth} from '../Auth.js';
import multer from 'multer';
import sharp from 'sharp';
const UserRouter=express.Router();

UserRouter.post('/register',async(req,res)=>{
     
    const temp=await User.findOne({email:req.body.email})
    if(temp)
    return res.status(409).send()
    const user=new User({name:req.body.name,
        email:req.body.email,
         password:bcrypt.hashSync(req.body.password,8)})
  
    try{
        await user.save();
        res.send({
            email:user.email,
           _id:user._id,
           name:user.name,
           token:generateToken({email:user.email,_id:user._id,name:user.name,password:user.password})
        })
    }
    catch(e)
    {
       
        res.status(500).send(e.message)
    }
})

UserRouter.post('/signin',async(req,res)=>{
  
    try{
        const user=await User.findOne({email:req.body.email})
       
        if(user)
        {
           if( bcrypt.compareSync(req.body.password,user.password))
            {
                res.send({
                   email:user.email,
                   _id:user._id,
                   name:user.name,
                   token:generateToken({email:user.email,_id:user._id,name:user.name,password:user.password})
                })
            }
            else
            return res.status(401).send( new Error())
        }
       else
       return res.status(401).send( new Error())
    }
    catch(e)
    {
        res.status(401).send(e)
    }
        
})

const avatar=multer({
  
    
  limits:{
      fileSize:1000000
  },
    fileFilter(req,file,cb){
        
      if(!file.originalname.match(/\.(jpg|jpeg|PNG|png)$/))
      return cb( new Error('Please add a jpg/png/jpeg file'))
      cb(undefined,true)
    }
  })


  UserRouter.post('/avatar', isAuth, avatar.single('avatar'), async (req, res) => {
    try{
    const buf=await sharp(req.file.buffer).resize({width:250,height:250}).png().toBuffer();
     const user=await User.findOneAndUpdate({_id:req.user._id},{avatar:buf})
    res.send()
    }
    catch(e)
    {
        res.status(400).send(e.message)
    }
  })

  UserRouter.get('/avatar/:id',isAuth,async(req,res)=>{
    try{
        
        const user=await User.findOne({_id:req.params.id})
        if(!user||!user.avatar)
        throw new Error()
        res.contentType('image/png');
        res.send(user.avatar)
       }
        catch{
            
          res.status(404).send()
        }
    })

export default UserRouter;
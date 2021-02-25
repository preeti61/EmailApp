import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import UserRouter from './Router/User.js';
import EmailRouter from './Router/Email.js';
dotenv.config();

const port=process.env.PORT||5000;
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const Connection_URL=process.env.MONGODB_URL


app.use('/api/user',UserRouter)
app.use('/api/email',EmailRouter)
if(process.env.NODE_ENV==='production')
{
  app.use(express.static('client/build'));
  app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}
mongoose.connect(Connection_URL,{useNewUrlParser:true,useCreateIndex:true,useFindAndModify:false,useUnifiedTopology:true}).then(()=>{
    app.listen(port,()=>{
        console.log("server up at port 5000");
    })
}).catch(()=>{
    console.log('could not connect')
})
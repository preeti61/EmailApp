import mongoose from "mongoose";

const emailSchema=new mongoose.Schema({
    to:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    from:{
        type:String,
        required:true
    },
  time:{
        type:String,
        required:true
    }
  
})

const Mail=new mongoose.model('Mail',emailSchema);
export default Mail;
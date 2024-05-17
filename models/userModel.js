import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true,
  },
  email:{
    type:String,
    requried:true,
    unique:true,
  },
  password:{
    type:String,
    required:true,
  },
  address:{
    type:String,
    required:true
  },
  role:{
    type:Number,
    default:0
  }

})

export default mongoose.model('users',userSchema);
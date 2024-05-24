import dotenv from 'dotenv';
dotenv.config();
import JWT from 'jsonwebtoken';
import { WriteResponse } from '../helpers/response.js';
import userModel from '../models/userModel.js';

export const requireSignIn=async(req,res,next)=>{
    try {
        // console.log(process.env.JWT_SECRET);
        // console.log(req.headers.authorization);
        const token = req.headers.authorization.split(' ')[1];
        const decode =JWT.verify(
            token,
            process.env.JWT_SECRET
        );
        req.data={};
        req.data.user=decode;
        next();
    } catch (error) {
        console.log(error);
        return WriteResponse(res,500,"Internal Server error",null);
    }
}

//admin access
export const isAdmin=async(req,res,next)=>{
    try {
        const user=await userModel.findById({_id:req.data.user._id});
        if(user.role!==1){
            return WriteResponse(res,401,"UnAuthorized Access",null);
        }
        next();
    } catch (error) {
        return WriteResponse(res,500,"Internal Server error",null);
    }
}


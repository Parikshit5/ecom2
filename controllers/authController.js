import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import { WriteResponse } from "../helpers/response.js"
import { maildata, transporter } from "../helpers/transporter.js";
import userModel from "../models/userModel.js";

export const registerController=async(req,res)=>{
    try {
        // throw new Error({'hehe':'haha'});

        //Validate name
        if (!req.body.name || req.body.name.length > 100 || !/^[a-zA-Z\s]+$/.test(req.body.name)) {
            return WriteResponse(res, 400, "Name can't be empty, must be less than 100 characters, and can only include letters and spaces", null);
        }
        
        //Validate email
        const ValidEmail=isValidEmail(req.body.emailId);
        if(!ValidEmail){
            return WriteResponse(res,400,"Please enter a valid email",null);
        }

        //Validate phone no.
        if(!isValidPhone(req.body.phone)){
            return WriteResponse(res,400,"Please enter a valid phone number",null)
        }
        //Validate password
        if(!isValidPassword){
            return WriteResponse(res,400,"Password must be at least 8 characters long, and must contain at least one uppercase letter, one lowercase letter, and one special character.",null)
        }

         //Validate address
         if (!req.body.address || req.body.address.length > 250) {
            return WriteResponse(res, 400, "Address can't be empty, must be less than 250 characters.", null);
        }


        
         const existing_user=await userModel.findOne({email:req.body.emailId});
        //  console.log("existing_user--------------------->",existing_user);
         if(existing_user){
            return WriteResponse(res, 409, "Account already exist with this email.",null);
         }
        const hashedpass= await hashPassword(req.body.password);
        const user = new userModel({
            email: req.body.emailId, // Ensure this matches the field in your Swagger doc
            password: hashedpass,
            name: req.body.name,
            address: req.body.address
        });

         // Save the user to the database
         const savedUser = await user.save();
        // const savedUser = await userModel.create({
        //     email: req.body.emailId,
        //     password: hashedpass,
        //     name: req.body.name,
        //     address: req.body.address
        // });
       
        return WriteResponse(res,200,"successful",savedUser);
    } catch (error) {
        console.log(error);
        return WriteResponse(res,500,"Internal Server error",null);
    }
}

export const contactController=async(req,res)=>{
    try {
        const mail=maildata('iprincepurohit@gmail.com',"test","first email text",'<b>kya baat h</b>');
        console.log(mail);
        transporter.sendMail(mail,(err, info)=>{
            if(err)
              console.log(err)
            // else
            //   console.log(info);
         });
         return WriteResponse(res,201,"Mail sent successfully",null);

    } catch (error) {
        console.log(error);
    }
}

//check the email is valid or not
function isValidEmail(email){
    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone){
    const phoneNumberRegex = /^\d{10,}$/;
    return phoneNumberRegex.test(phone)
}

function isValidPassword(password){
    const passwordRegex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
    return passwordRegex.test(password);

}

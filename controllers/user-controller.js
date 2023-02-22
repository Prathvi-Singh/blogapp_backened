import User from '../models/user.js'
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
import Token from '../models/token.js'

dotenv.config();

export const signupUser = async(req,res)=>{
     // console.log(res.data)
    try{
       
      
       const user=req.body;
      
       const hashPassword= await bcrypt.hash(user.password,10);
 
       const newUser=new User({name:user.name , password:hashPassword ,email:user.email});
       await newUser.save();  
       res.status(200).json({message:"everything oK"});
    }
    catch(error){
     
       res.status(500).json({message:"there  is some an error from backend side"});
    
    }
}
// export default signupUser

export const loginUser = async(req,res)=>{
   const user=await User.findOne({email:req.body.email})
  
 
   if(!user){
    
      res.status(404).json({message:"user not found"});
   }

   try{
     
      const match=await bcrypt.compare(req.body.password,user.password);
     
      if(match){
       
    
     

      const accessToken = jwt.sign(user.toJSON(),process.env.ACCESS_KEY,{expiresIn:'15m'})
       const refreshToken = jwt.sign(user.toJSON(),process.env.REFRESH_KEY);
     
      
    
       const newToken =new Token({token:refreshToken});
       await newToken.save();
    
    res.status(200).json({accessToken:accessToken,refreshToken:refreshToken,email:user.email,name:user.name});

      }
      else{
       
         res.status(400).json({message:"Invalid password"})
      }
   }
   catch(error){
      res.status(500).json({message:"there is some an error"});
     
   }

}


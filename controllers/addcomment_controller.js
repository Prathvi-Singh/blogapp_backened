 import Comment from '../models/comment.js' 

export const newComment =async(req,res)=>{
    try{
 
     const add=await Comment(req.body);
     add.save();
 
    res.status(200).json({message:'hello .....'});
 
   }
 catch(error){
     res.status(400).json({message:error.message});
 }
    
 }
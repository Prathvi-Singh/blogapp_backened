 import Comment from '../models/comment.js' 

export const newComment =async(req,res)=>{
    try{
     console.log(req.body) 
     const add=await Comment(req.body);
     add.save();
 
    res.status(200).json({message:"successfully added comment"});
 
   }
 catch(error){
    console.log("error.................in newcomment");
     res.status(400).json({message:error.message});
 }
    
 }

 export const allcomments=async(req,res)=>{
    const all = await Comment.find({postId:req.query.id});
    console.log(all);
    
        try{
           
            res.status(200).json(all);
            
        }
        catch(error){
            console.log("error.................in allcomment");
            res.status(404).json({message:error.message});
        }
 }

 export const deleteComments=async(req,res)=>{
    // //   const com=await Comment.findById(req.params.id);
    // //   if(!com){
    // //     res.status(404).json({message:"there is no such message"});
    // //   }
    //   try{
    //     const com=await Comment.findById(req.params.id);
    //     if(!com){
    //       res.status(404).json({message:"there is no such message"});
    //     }
    //      console.log("hello ,I am sitting in delete comment")
    //       com.delete();
    //       const data=await Comment.find({});
    //       res.status(200).json(data);
    //   }
    //   catch(error){
    //     res.status(404).json({message:error.message});  
    //   }
    try{
        const post =await Comment.findById(req.params.id);
        console.log("-->",post);
        if(!post){
          return res.status(404).json({message:"post is not find in delete"});
        }
        post.delete();
        const data=await Comment.find({});
        return res.status(200).json(data);
    }
    catch(error){
        console.log("error.................in deltecomment");
       return res.status(400).json({message:error.message});
    }
 
 }
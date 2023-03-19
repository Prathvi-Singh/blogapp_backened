import POST from '../models/post.js'

export const createPost =async(req,res)=>{
   try{
     const post=await POST(req.body);
     post.save();

     return res.status(200).json({message:"Successfully created post"});
   }
   catch(error){
     return res.status(405).json({message:"Error ..."})
   }
}


export const getAllPosts =async(req,res)=>{
  let category =req.query.category;
  //console.log(category);
  let posts;
  try{
    
    if(category && category !== 'ALL'){
      posts=await POST.find({categories:category});
     // console.log(posts);
    }
    else{
     posts = await POST.find({});
      //console.log(posts)
    }
 
    return res.status(200).json(posts);
  }
  catch(error){
   return res.status(400).json({message : error.message});
  }
}

export const getPost =async(req,res)=>{
 
  console.log("hello");
 
  try{
    
    const id=req.params.id;
    console.log(id);
    const post=await POST.findById(req.params.id);
   
    return res.status(200).json(post)
   }
   catch(err){
   
    return res.status(400).json({message:err.message})
   }
}

export const updatePost =async(req,res)=>{
  try{
     const post= await POST.findById(req.params.id);
          console.log("mai bhi upadte mai hi hu per server mai",post);       
     if(!post){
       return res.status(404).json({message:"post is not find"});
     }

     await POST.findByIdAndUpdate(req.params.id,{$set:req.body});
     return res.status(200).json({message:"message successfully updated"});

  }
  catch(error){
    return res.status(400).json({message:error.message});
  }
}

export const deletePost =async(req,res)=>{
  try{
      const post =await POST.findById(req.params.id);
      if(!post){
        return res.status(404).json({message:"post is not find"});
      }
      post.delete();
      return res.status(200).json({message:"message successfully deleted"});
  }
  catch(error){
     return res.status(400).json({message:error.message});
  }
}




import mongoose from 'mongoose';
mongoose.set('strictQuery', true);

const Connection=async(URL)=>{
   
   try{
    await mongoose.connect(URL,{useNewUrlParser:true});
    console.log("Connection successful with database");
   }
   catch(error){
     console.log("facing some ERROR",error);
   }

 
}

export default Connection;

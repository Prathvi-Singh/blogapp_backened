import mongoose from 'mongoose';

const postSchema = mongoose.Schema({

    title:{
        type: String,
        required: true,
        unique:true,
    },

    description:{
        type:String ,
        required:true,
    },
     
    createDate :{
        type:Date,
        required:true
    }
    ,
    picture:{
        type:String,
        required:true
    }
    ,
    categories:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
})

const Post = mongoose.model('Post',postSchema);

export default Post;
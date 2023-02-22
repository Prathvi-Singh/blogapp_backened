// import multer  from 'multer'
// import { GridFsStorage} from 'multer-gridfs-storage'
// import dotenv from 'dotenv'

// dotenv.config();

// const username=process.env.DB_USERNAME;
// const userpassword=process.env.DB_PASSWORD;

// const storage =new GridFsStorage({
   
//     url:`mongodb+srv://${username}:${userpassword}@cluster0.r5lt5ic.mongodb.net/blogapp?retryWrites=true&w=majority`,
//     options : {useNewUrlParser : true},
//     file : (request,file) => {
      
//         const match = ['image/png','image/jpeg'];
       
//         if(match.indexOF(file.memeType)===-1){
           
//             return `${Date.now()}-blog-${file.originalname}`
//         }
//         return {
//             bucketName:"photos",
//             filname:`${Date.now()}-blog-${file.originalname}`
//         }
//     }
// })

// export default multer({storage});
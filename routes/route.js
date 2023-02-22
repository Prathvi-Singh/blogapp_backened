import express from 'express';
import {signupUser,loginUser} from '../controllers/user-controller.js'
import { uploadImage } from '../controllers/uploadImage-controller.js';
// import upload from '../utils/upload.js'
import {createPost,getAllPosts,getPost,updatePost,deletePost} from '../controllers/post-controller.js'
import { authenticateToken } from '../controllers/jwt-auth-controller.js';
import UpdatePost from '../../client1/src/Component/Create/updatePost.js';
import {newComment} from '../controllers/addcomment_controller.js'


const router =express();

router.post('/signup',signupUser);
router.post('/login',loginUser)
//router.post('/file/upload',upload.single('file'),uploadImage);
router.post('/create',authenticateToken,createPost);
router.get('/posts',authenticateToken,getAllPosts);
router.get('/post:id',authenticateToken,getPost);
router.put('/update:id',authenticateToken,updatePost);
router.delete('/delete:id',authenticateToken,deletePost);
router.post('/comments/new',authenticateToken,newComment);


export default router;
import express from 'express';
import {signupUser,loginUser} from '../controllers/user-controller.js'
import { uploadImage,getImage } from '../controllers/Image-controller.js';
import upload from '../utils/upload.js'
import {createPost,getAllPosts,getPost,updatePost,deletePost} from '../controllers/post-controller.js'
import { authenticateToken } from '../controllers/jwt-auth-controller.js';

import {newComment,allcomments,deleteComments} from '../controllers/addcomment_controller.js'


const router =express();

// router.post('/signup',signupUser);
// router.post('/login',loginUser)
 router.post('/file/upload',upload.single('file'),uploadImage);
// router.post('/create',authenticateToken,createPost);
// router.get('/posts',authenticateToken,getAllPosts);
// router.get('/post:id',authenticateToken,getPost);
// router.put('/update:id',authenticateToken,updatePost);
// router.delete('/delete:id',authenticateToken,deletePost);
// router.post('/comments/new',authenticateToken,newComment);
// router.get('/file/:filename',getImage);

router.post('/signup',signupUser);
router.post('/login',loginUser)

router.post('/create',createPost);
router.get('/posts',getAllPosts);
router.get('/post:id',getPost);
router.put('/update:id',updatePost);

router.post('/comments/new',newComment);
router.get('/file/:filename',getImage);
router.get('/allcomments',allcomments)
router.delete('/deletecomment:id',deleteComments)
router.delete('/delete:id',deletePost);



export default router;
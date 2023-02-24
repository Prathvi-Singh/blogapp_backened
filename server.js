import express from 'express';
import Connection from './database/db.js'
import dotenv from 'dotenv';
import Router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
mongoose.set('strictQuery', true);


const app=express();
const PORT=process.env.PORT ||8000;
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',Router);



dotenv.config()

app.get('/hello',(req,res)=>{
    res.send("hello world");
})

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static('client1/build'))
// }

const USERNAME=process.env.DB_USERNAME;
const USERPASSWORD=process.env.DB_USERPASSWORD;

const URL=process.env.MONGODB_URI || `mongodb+srv://${USERNAME}:${USERPASSWORD}@cluster0.r5lt5ic.mongodb.net/blogapp?retryWrites=true&w=majority`;





app.listen(PORT, ()=>{console.log(`Connection connect successfully at PORT : ${PORT}`)})
Connection(URL);

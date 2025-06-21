import express from "express";
import mongoose from "mongoose";
import bodyParser from 'express'
import userRouter from './routes/user.js'
import recipeRouter from './routes/recipe.js'
import cors from 'cors'

import dotenv from 'dotenv';

// Load .env variables

const app = express(); 

dotenv.config();

app.use(express.json())
app.use(cors({
  origin:true,
  methods:["GET","POST","PUT","DELETE"],
  credentials:true
 
}))

// userRouter
app.use('/api',userRouter)

// recipeRouter
app.use('/api',recipeRouter)


mongoose.connect(
    process.env.mongourl,
    {
        dbName:"MERN_RECIPE",
       
    }
).then(()=>console.log("mongodb connected")).catch((err)=>console.log(err.msg))

const port = 3000;
app.listen(port, () => console.log(`server is running on port ${port}`));



import express from 'express'
import mongoose from 'mongoose';
const app=express();


const connect=()=>{
    return mongoose.connect(
      "mongodb+srv://vishnu:vishnu123@cluster0.giuzgq2.mongodb.net/?retryWrites=true&w=majority"
    );
}

export default connect

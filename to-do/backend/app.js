

import express, { json } from "express";
import cors from 'cors'
import connect  from "./src/config/db.js";
import todoController from "../backend/src/controller/todo.controller.js";
const app=express();

app.use(cors());
app.use(express.json());
app.use('/todos',todoController);


app.listen(3000,async()=>{
     try {
        await connect();
        console.log('listening on port 3000')
     } catch (error) {
        console.log(error);
     }
})
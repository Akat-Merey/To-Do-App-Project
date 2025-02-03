import express from "express";
import mongoose from "mongoose";
import setupRoutes from "./routes/routes.js"

const app = express();
const port = 8000;

const dbUrl = "mongodb://localhost:27017/to-do-app";

//function to start the server and to connect to the database
async function start(){
    try{
        setupRoutes(app)
        app.listen(port, async()=>{
            console.log(`Connected to sever with port ${port}`)
            try{
                await mongoose.connect(dbUrl)
                console.log('Connected to db')
            }catch(er){
                console.error("failed to connect to db")
            }
        })
    }catch(e){
        console.log("error to launch server");
    };
}

start();
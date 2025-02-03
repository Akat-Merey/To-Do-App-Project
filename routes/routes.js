import express from "express";
import toDoRoutes from "./todo.routes.js"

// all middlewares + /to-do-app route
export default function(app){
    app.use(express.urlencoded({extended: true}));
    app.use(express.json())
    app.use("/to-do-app", toDoRoutes)
    app.use(express.static('public'))
    
}
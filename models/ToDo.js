import mongoose from "mongoose";

//Schema for the database document
const toDoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    details: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: Boolean,
        required: true,
        default: false
    },
    statusChangeTime: {
        type: Date,
        required: false
    },
    category:{
        type: String,
        required: true,
        enum: ['Work', 'Study', 'Health', 'Sport', 'Social', 'Self-development', 'Daily']
    }
})

export const ToDo = mongoose.model("ToDo", toDoSchema)
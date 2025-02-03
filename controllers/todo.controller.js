import { ToDo } from "../models/ToDo.js";

// function to res.render the page for adding post by user
export async function addToDoGetEjs(req, res){
    try{
        res.render("addTask.ejs")
    }catch(er){
        console.error("Error during launching addToDoGetEjs function in todo.controller.js", err);
        res.status(500).json({
            message: "Error occured when addingt task to db",
            error: err.message
        })
    }
}

// function to add post to the databas
export async function addToDo(req, res){
    try{
        const { title, details, date, category} = req.body;
        const createToDo = new ToDo({ title, details, date, category});
        const result = await createToDo.save();
        res.status(201).redirect("/to-do-app")
    }catch(err){
        console.error("Error during launching addToDo function in todo.controller.js", err);
        res.status(500).json({
            message: "Error occured when addingt task to db",
            error: err.message
        })
    };
};

// for developers to insert multiple tasks
export async function addMany(req, res){
    try{
        const result = await ToDo.insertMany(req.body);
        res.status(201).json(result)
    }catch(err){
        console.error("Error during launching addMany function in todo.controller.js", err);
        res.status(500).json({
            message: "Error occured when addingt array of tasks to db",
            error: err.message
        })
    };
};

//function to get all and sorted tasks
export async function getToDo(req, res){
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1)

    try{

            // if the category query is given the tasks only with this category will be sended
            if(req.query.category){
                    const chosenCategory = req.query.category.split(',');
                    const resultToDoPast = await ToDo.find({category: { $in: chosenCategory}, status: false, date:{$lte:today}}).sort({date: 1});
                    const resultToDoToday = await ToDo.find({category: { $in: chosenCategory}, status: false, date:{$gte:today, $lt:tomorrow}}).sort({date: 1});
                    const resultToDoFuture = await ToDo.find({category: { $in: chosenCategory}, status: false, date:{$gte:tomorrow}}).sort({date: 1});
                    const toDoList = {
                        past: resultToDoPast, 
                        today: resultToDoToday, 
                        future: resultToDoFuture
                    }
                    const resultDone = await ToDo.find({category: { $in: chosenCategory}, status: true}).sort({statusChangeTime: -1});

                    const result = {
                        "toDo": toDoList,
                        "done": resultDone,
                        "category": req.query.category
                    }
                    res.status(201).render('main.ejs', {result});
              
            // if the category is not given, all tasks will be shown
            } else {
                const resultToDoPast = await ToDo.find({status: false, date:{$lte:today}}).sort({date: 1});
                const resultToDoToday = await ToDo.find({status: false, date:{$gte:today, $lt:tomorrow}}).sort({date: 1});
                const resultToDoFuture = await ToDo.find({status: false, date:{$gte:tomorrow}}).sort({date: 1});
                const toDoList = {
                    past: resultToDoPast, 
                    today: resultToDoToday, 
                    future: resultToDoFuture
                }
                const resultDone = await ToDo.find({status: true}).sort({statusChangeTime: -1});

                const result = {
                    "toDo": toDoList,
                    "done": resultDone
                }
                res.status(201).render('main.ejs', {result});
            }



    }catch(err){
        console.error("Error during launching getToDo function in todo.controller.js", err);
        res.status(500).json({
            message: "Error occured when reading and sorting tasks",
            error: err.message
        })
    };
};

// function to mark the task as done
export async function markDone(req, res){
    const today = new Date();
    try{
        const { id } = req.params;
        const result = await ToDo.findByIdAndUpdate(id, {status: true, statusChangeTime: today}, {new: true});
        res.status(201).json(result);
    }catch(err){
        console.error("Error during launching markDone function in todo.controller.js", err);
        res.status(500).json({
            message: "Error occured when marking the task as done",
            error: err.message
        })
    };
};

// function to remove the "done" mark from the task
export async function removeMarkDone(req, res){
    try{
        const { id } = req.params;
        const result = await ToDo.findByIdAndUpdate(id, {status: false, $unset: {statusChangeTime: ""}}, {new: true});
        res.status(201).json(result);
    }catch(err){
        console.error("Error during launching removeMarkDone function in todo.controller.js", err);
        res.status(500).json({
            message: "Error occured when removing mark done",
            error: err.message
        })
    };
};


// function to delete the task from the database
export async function deleteToDo(req, res){
    try{
        const { id } = req.params;
        const result = await ToDo.findByIdAndDelete(id);
        res.status(201).json(result);
    }catch(err){
        console.error("Error during launching deleteToDo function in todo.controller.js", err);
        res.status(500).json({
            message: "Error occured when deleting the task",
            error: err.message
        })
    };
};


// function to delete the task from the database
export async function deleteAll(req, res){
    try{
        const result = await ToDo.deleteMany();
        res.status(201).json(result);
    }catch(err){
        console.error("Error during launching deleteAll function in todo.controller.js", err);
        res.status(500).json({
            message: "Error occured when deleting the task",
            error: err.message
        })
    };
};


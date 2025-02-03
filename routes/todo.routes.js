import { Router } from "express";
import { addToDo, getToDo, markDone, deleteToDo, removeMarkDone, addMany, addToDoGetEjs, deleteAll } from "../controllers/todo.controller.js";
const router = Router();



//after /to-do-app we have routers below for different tasks
router.get("/addPost", addToDoGetEjs);
router.post("/addPost", addToDo);
router.get("/", getToDo);
router.patch("/markingDone/:id", markDone);
router.patch("/removingMarkDone/:id", removeMarkDone);
router.delete("/:id", deleteToDo);
router.delete("/", deleteAll);

// for developers to insert multiple tasks
router.post("/addMany", addMany);
export default router;
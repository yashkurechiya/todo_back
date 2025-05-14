import express from "express";
import { isAuthenticated } from "../middlewares/auth.js"
import { deletetask, getMyTask, newTask, updatetask } from "../controllers/task.js";

const router = express.Router();

router.post("/new", isAuthenticated, newTask);

router.get("/my", isAuthenticated, getMyTask);

router.route("/:id")
    .put(isAuthenticated, updatetask)
    .delete(isAuthenticated, deletetask)


export default router;


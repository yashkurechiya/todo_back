import ErrorHandler from "../middlewares/error.js";
import { Task } from "../models/task.js";



export const newTask = async (req, res, next) => {

    const { title, description } = req.body;

    await Task.create({
        title,
        description,
        user: req.user,
    });

    res.status(201).json({
        success: true,
        message: "Task added Successfully",
    })
};

export const getMyTask = async (req, res, next) => {

    const userid = req.user._id;

    const tasks = await Task.find({ user: userid });

    res.status(200).json({
        success: true,
        tasks,
    })

}
export const updatetask = async (req, res, next) => {

    const { id } = req.params;

    console.log("working");
    const task = await Task.findById(id);

    if(!task) return next(new ErrorHandler("invali", 404))
    console.log("working");
    

    task.isCompleted = !task.isCompleted;

    await task.save();

    res.status(200).json({
        success: true,
        message: "task updated",
    })

}

export const deletetask = async (req, res, next) => {

    const { id } = req.params;

    const task = await Task.findById(id);

    // if(!task) return next(new Error("nice"));
    
    await task.deleteOne();

    res.status(200).json({
        success: true,
        message: "Task deleted"
    })
}
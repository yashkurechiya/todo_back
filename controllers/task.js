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

  const task = await Task.findById(id);

  if (!task) return next(new ErrorHandler("Invalid Task ID", 404));

  // Optional update fields
  if (req.body.title) task.title = req.body.title;
  if (req.body.description) task.description = req.body.description;

  // Optional toggle
  if (typeof req.body.isCompleted === "boolean") {
    task.isCompleted = req.body.isCompleted;
  }

  await task.save();

  res.status(200).json({
    success: true,
    message: "Task updated",
    task,
  });
};


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
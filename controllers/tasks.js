const Task = require("../models/task");
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require("../errors/custom-error")


const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
})

const getSingleTask = asyncWrapper(async (req, res) => {
    const {id: task_id} = req.params;
    const task = await Task.findOne({ _id: task_id});
    if(!task){
        return next(createCustomError(`No task with such Id: ${task_id}`, 404))
    }
    res.status(200).json({task});
})

const addNewTask = asyncWrapper(async (req, res) => {
    const new_task = await Task.create(req.body);
    res.status(201).json(new_task);
})

const updateTask = asyncWrapper(async (req, res) => {
    const {id: task_id} = req.params;

    const task = await Task.findOneAndUpdate({_id: task_id}, req.body, {new: true, runValidators:true});
    if(!task){
        return next(createCustomError(`No task with such Id: ${task_id}`, 404))
    }
    res.status(200).json({ task });
})

const deleteTask = asyncWrapper(async(req, res) => {
    const {id: task_id} = req.params;
    const task = await Task.findOneAndDelete({_id: task_id});
    if(!task){
        return next(createCustomError(`No task with such Id: ${task_id}`, 404))
    }
    res.status(200).json({success: true, msg: `task with id: ${task_id} has been successfully deleted.`});
})


module.exports = {
    getAllTasks,
    getSingleTask,
    addNewTask,
    updateTask,
    deleteTask
}
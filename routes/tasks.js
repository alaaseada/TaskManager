const express = require("express");
const router = express.Router();
const {
    getAllTasks,
    getSingleTask,
    addNewTask,
    updateTask,
    deleteTask
} = require("../controllers/tasks")

router.route('/').get(getAllTasks).post(addNewTask);
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask);

module.exports = router;
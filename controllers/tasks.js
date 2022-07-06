const getAllTasks = (req, res) => {
    res.status(200).json({success: true, data: "All tasks are going to be displayed here....."})
}

const getSingleTask = (req, res) => {
    res.status(200).json({success: true, id: req.params.id})
}

const addNewTask = (req, res) => {
    res.status(200).json({success: true, data: req.body})
}

const updateTask = (req, res) => {
    res.status(200).json({success: true, data: "A task is to be updated here....."})
}

const deleteTask = (req, res) => {
    res.status(200).json({success: true, data: "A task is to be deleted here....."})
}


module.exports = {
    getAllTasks,
    getSingleTask,
    addNewTask,
    updateTask,
    deleteTask
}
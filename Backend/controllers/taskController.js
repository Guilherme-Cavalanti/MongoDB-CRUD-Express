const Task = require("../models/task")

const TaskController = {

    create: async (req, res) => {
        try {
            const task = {
                title: req.body.title,
                priority: req.body.priority,
                status: req.body.status,
                dueDate: req.body.dueDate,
                description: req.body.description
            }
            const response = await Task.create(task)

            res.status(200).json({ response, "message": "Task created" })
            console.log("task created")
        } catch (error) {
            console.log(error)
            res.status(400).json({ "message": "Error creating task" })
        }
    },
    getTasks: async (req, res) => {
        try {
            const response = await Task.find();
            console.log("returning tasks")
            res.status(200).json({ response, "message": "Returning tasks" })
        } catch (error) {
            console.log(error)
            res.status(400).json({ "message": "Error returning tasks" })
        }
    },
    getTaskById: async (req, res) => {
        try {
            const id = req.params.id
            const response = await Task.findById(id)

            if (response === null) {

                console.log("task not found")
                res.status(404).json({ "message": "task not found" })
                return
            }
            console.log("returned task")
            res.status(200).json({ response, "message": `return task with id ${id}` })
        } catch (error) {
            console.log(error)
            res.status(400).json({ "message": "Error getting task" })
        }
    },
    deleteTask: async (req, res) => {
        try {
            const id = req.query.id
            const response = await Task.findById(id)

            if (response === null) {

                console.log("task not found")
                res.status(404).json({ "message": "task not found" })
                return
            }

            const deletedTask = await Task.findByIdAndDelete(id)
            console.log("deleted task")
            res.status(200).json({ deletedTask, "message": `deleted task with id ${id}` })
        } catch (error) {
            console.log(error)
            res.status(400).json({ "message": "Error deleting task" })
        }
    },
    updateTask: async (req, res) => {
        try {
            const id = req.query.id

            const newTask = {
                title: req.body.title,
                priority: req.body.priority,
                status: req.body.status,
                dueDate: req.body.dueDate,
                description: req.body.description
            }

            const updatedTask = await Task.findByIdAndUpdate(id, newTask)

            if (updatedTask === null) {

                console.log("task not found")
                res.status(404).json({ "message": "task not found" })
                return
            }

            console.log("updated task")
            res.status(200).json({ updatedTask, "message": `updated task with id ${id}` })
        } catch (error) {
            console.log(error)
            res.status(400).json({ "message": "Error updating task" })
        }
    },
}

module.exports = TaskController
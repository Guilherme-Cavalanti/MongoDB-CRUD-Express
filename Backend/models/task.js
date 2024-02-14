const mongoose = require("mongoose")

const {Schema} = mongoose

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
    },
    status: {
        type: String,
        enum: ['To Do', 'In Progress', 'Completed'],
    },
    dueDate: {
        type:String,
        required: true
    },
    description: {
        type: String
    }
},{timestamps: true});

const TaskModel = mongoose.model("Task",taskSchema)

module.exports = TaskModel
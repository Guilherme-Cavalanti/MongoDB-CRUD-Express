import api from "./api"
const InsertTask = async (task) => {
    try {
        const response = await api.post("/", {
            "title": task.title,
            "priority": task.priority,
            "status": task.status,
            "dueDate": task.dueDate,
            "description": task.description
        })
        return response
    } catch (error) {
        console.log("Error inserting task:", error)
        return ({"fail":"Failed to connect to server",error})
    }
}

export default {
    InsertTask
}
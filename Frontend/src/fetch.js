import api from "./api"
const InsertTask = async (task) => {
    try {
        const response = await api.post("/", {
            "title": task.title,
            "priority": task.priority,
            "status": task.status,
            "dueDate": task.dueDate
        })
        return response
    }catch(error){
        console.log("Error inserting task:",error)
    }
}

export default InsertTask
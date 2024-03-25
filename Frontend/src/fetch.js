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
        return ({ "fail": "Failed to connect to server", error })
    }
}

const GetTasks = async () => {
    try {
        const response = await api.get("/")
        const { data } = response
        return data
    } catch (error) {
        console.log("Error getting tasks:", error)
        return ({ "fail": "Failed to connect to server", error })
    }
}

const GetTaskbById = async (id) => {
    try {
        const response = await api.get(`/${id}`)
        const { data } = response
        return data
    } catch (error) {
        console.log("Error getting tasks:", error)
        if (error.code == "ERR_NETWORK") {
            return ({ "message": "Failed to connect to server", error })
        }
        if (error.code == "ERR_BAD_REQUEST") {
            const { response } = error
            return ({ ...response.data, error })
        }
    }
}

const UpdateTask = async (id, task) => {
    try {
        const response = await api.put(`/update?id=${id}`, {
            "title": task.title,
            "priority": task.priority,
            "status": task.status,
            "dueDate": task.dueDate,
            "description": task.description
        })
        const { data } = response
        return data
    } catch (error) {
        console.log("Error getting tasks:", error)
        if (error.code == "ERR_NETWORK") {
            return ({ "message": "Failed to connect to server", error })
        }
        if (error.code == "ERR_BAD_REQUEST") {
            const { response } = error
            return ({ ...response.data, error })
        }
    }
}

const DeleteTask = async (id) => {
    try {
        const response = await api.delete(`/delete?id=${id}`)
        const {data} = response
        return data
    } catch (error) {
        console.log("Error getting tasks:", error)
        if (error.code == "ERR_NETWORK") {
            return ({ "message": "Failed to connect to server", error })
        }
        if (error.code == "ERR_BAD_REQUEST") {
            const { response } = error
            return ({ ...response.data, error })
        }
    }
}

export default {
    InsertTask,
    GetTasks,
    GetTaskbById,
    UpdateTask,
    DeleteTask
}


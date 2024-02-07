import InsertTask from '../fetch'
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"

function Insert() {
    const [task, setTask] = useState({})

    const [title, setTitle] = useState("")
    const [status, setStatus] = useState("To Do")
    const [priority, setPriority] = useState("Low")
    const [dueDate, setDueDate] = useState("")


    useEffect(() => {
        if (task.title !== undefined) {
            const ConfirmInsert = async () => {
                const response = await InsertTask(task)
                console.log(response)
            }
            ConfirmInsert()
        }
    }, [task])

    const DefineTask = (event) => {
        setTask({
            "title": title,
            "priority": priority,
            "status": status,
            "dueDate": dueDate
        })
        event.preventDefault()
    }

    const handleChangeTitle = (event) => {
        event.preventDefault()
        setTitle(event.target.value)
    }

    const handleChangePriority = (event) => {
        event.preventDefault()
        setPriority(event.target.value)
    }

    const handleChangeStatus = (event) => {
        event.preventDefault()
        setStatus(event.target.value)
    }

    const handleChangeDueDate = (event) => {
        event.preventDefault()
        setDueDate(event.target.value)
    }

    return (
        <>
            <Container className='border rounded'>
                <Form onSubmit={DefineTask}> 
                    <Form.Control type='text' placeholder='title name' onChange={handleChangeTitle} value={title} className='md-4'  required/>
                    <Form.Select value={priority} onChange={handleChangePriority} className='md-4'>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </Form.Select>
                    <Form.Select value={status} onChange={handleChangeStatus} className='md-4'>
                        <option value="To do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </Form.Select>
                    <Form.Control type='date' placeholder="dueData" onChange={handleChangeDueDate} value={dueDate} className='md-4' />
                    <Button variant='warning' type='submit'>Insert</Button>
                </Form>
                
            </Container>
        </>

    )
}

export default Insert
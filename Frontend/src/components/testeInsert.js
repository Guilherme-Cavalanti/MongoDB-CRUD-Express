import fetch from '../fetch'
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import Col from 'react-bootstrap/esm/Col';
import Row from "react-bootstrap/Row"

export default function InsertForm(props) {
    const {InsertTask} = fetch
    const [task, setTask] = useState({})

    const [title, setTitle] = useState("")
    const [status, setStatus] = useState("To Do")
    const [priority, setPriority] = useState("Low")
    const [dueDate, setDueDate] = useState("")
    const [description, setDescription] = useState("")
    const [maxChar, setMaxChar] = useState(false)



    const maxDescription = 1000
    useEffect(() => {
        if (task.title !== undefined) {
            const ConfirmInsert = async () => {
                const response = await InsertTask(task)
                props.sendResponse(response)
            }
            props.sendTask()
            ConfirmInsert()
        }
    }, [task])

    const DefineTask = (event) => {
        setTask({
            "title": title,
            "priority": priority,
            "status": status,
            "dueDate": dueDate,
            "description": description
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

    const EraseInfo = () => {
        setDueDate("")
        setTitle("")
        setStatus("To Do")
        setPriority("Low")
        setDescription("")
        props.clear()
    }

    const handleChangeDescription = (event) => {
        event.preventDefault()
        setDescription(event.target.value)
    }

    useEffect(() => {
        if (description.length === maxDescription) setMaxChar(true)
        if (maxChar == true || description.length < maxDescription) setMaxChar(false)
    }, [description])

    return (
        <>
            <Container style={{ width: "100%" }} className='mb-2'>

                <Form onSubmit={DefineTask} className='p-3 border border-2 rounded'>
                    <h3 className='mb-3 text-center text-uppercase'>Insert your Task here</h3>
                    <Row>
                        <Col md={3} className='mb-2'>
                            <Form.Label className='fw-bold'>Title</Form.Label>
                            <Form.Control type='text' placeholder='Task title' onChange={handleChangeTitle} value={title} required />
                        </Col>
                        <Col md={3} className='mb-2'>
                            <Form.Label className='fw-bold'>Priority</Form.Label>
                            <Form.Select value={priority} onChange={handleChangePriority}>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </Form.Select>
                        </Col>
                        <Col md={3} className='mb-2'>
                            <Form.Label className='fw-bold'>Status</Form.Label>
                            <Form.Select value={status} onChange={handleChangeStatus}>
                                <option value="To do">To Do</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                            </Form.Select>
                        </Col>
                        <Col md={3} className='mb-2'>
                            <Form.Label className='fw-bold'>Due Date</Form.Label>
                            <Form.Control type='date' placeholder="dueData" onChange={handleChangeDueDate} value={dueDate} required />
                        </Col>
                    </Row>
                    <Row>
                        <Form.Label className='fw-bold'>Description (optional)</Form.Label>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <textarea
                                name="text" rows="14" wrap="soft" maxlength={maxDescription} onChange={handleChangeDescription} value={description}
                                style={{ height: "200px", overflowY: "auto", width: "100%", resize: "none" }}
                                className='taskCardDescription'
                            />
                        </Col>
                        {maxChar && <span className='text-danger'>*max length reached</span>}
                    </Row>
                    <Row className="justify-content-center px-5">
                        <Col md={3} className="text-center mt-3" sm={6}>
                            <Button variant='danger' onClick={EraseInfo}>Erase</Button>
                        </Col>
                        <Col md={3} className="text-center mt-3" sm={6}>
                            <Button variant='success' type='submit' className='mr-3'>Create</Button>
                        </Col>
                    </Row>
                </Form>

            </Container>
        </>

    )
}

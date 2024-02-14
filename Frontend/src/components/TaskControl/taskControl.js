import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import { useState, useEffect } from "react"
import Button from "react-bootstrap/esm/Button"

export function TaskControl(props) {


    const maxDescription = 1000
    const [title, setTitle] = useState("")
    const [status, setStatus] = useState("")
    const [priority, setPriority] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [description, setDescription] = useState("")
    const [maxChar, setMaxChar] = useState(false)
    const [taskInfo, setTaskInfo] = useState({})
    const [edit, setEdit] = useState(false)

    useEffect(() => {
        if (props.info.title !== undefined) {
            setTaskInfo(props.info)
        }
    }, [props.info])

    useEffect(() => {
        setEdit(!props.disable)
    }, [props.disable])

    const ResetInfo = () => {
        setTitle(taskInfo.title)
        setStatus(taskInfo.status)
        setPriority(taskInfo.priority)
        setDueDate(taskInfo.dueDate)
        setDescription(taskInfo.description)
        props.cancel()
    }
    useEffect(() => {
        if (taskInfo.title !== undefined) {
            ResetInfo()
        }
    }, [taskInfo])

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

    const handleChangeDescription = (event) => {
        event.preventDefault()
        setDescription(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.update({
            "title": title,
            "status": status,
            "priority": priority,
            "dueDate": dueDate,
            "description": description
        })
    }

    return (
        <Container fluid className="mb-5">
            <Form className='p-3 border border-2 rounded' onSubmit={handleSubmit}>
                <h3 className='mb-3 text-center text-uppercase'>Task Info</h3>
                <Row>
                    <Col md={3} className='mb-2'>
                        <Form.Label className='fw-bold'>Title</Form.Label>
                        <Form.Control type='text' placeholder='Task title' onChange={handleChangeTitle} value={title} required disabled={props.disable} />
                    </Col>
                    <Col md={3} className='mb-2'>
                        <Form.Label className='fw-bold'>Priority</Form.Label>
                        <Form.Select value={priority} onChange={handleChangePriority} disabled={props.disable}>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </Form.Select>
                    </Col>
                    <Col md={3} className='mb-2'>
                        <Form.Label className='fw-bold'>Status</Form.Label>
                        <Form.Select value={status} onChange={handleChangeStatus} disabled={props.disable}>
                            <option value="To do">To Do</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </Form.Select>
                    </Col>
                    <Col md={3} className='mb-2'>
                        <Form.Label className='fw-bold' >Due Date</Form.Label>
                        <Form.Control type='date' placeholder="dueData" onChange={handleChangeDueDate} value={dueDate} required disabled={props.disable} />
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
                            className='taskCardDescription' readOnly={props.disable}
                        />
                    </Col>
                    {maxChar && <span className='text-danger'>*max length reached</span>}
                </Row>
                {edit &&
                    <Row className="justify-content-center px-5">
                        <Col md={3} className="text-center mt-3" sm={6}>
                            <Button variant='dark' onClick={ResetInfo}>Cancel</Button>
                        </Col>
                        <Col md={3} className="text-center mt-3" sm={6}>
                            <Button variant='success' type='submit' className='mr-3'>Confirm</Button>
                        </Col>
                    </Row>
                }
            </Form>
        </ Container>
    )

}
import InsertForm from "../../components/testeInsert"
import Container from "react-bootstrap/esm/Container"
import Card from "react-bootstrap/Card"
import Spinner from "react-bootstrap/Spinner"
import { useState, useEffect } from "react"
import Alert from "react-bootstrap/Alert"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Space from "../../components/Space"
import { Link } from "react-router-dom"
import './InsertPage.css'

export default function InsertPage() {

    const [loading, setLoading] = useState(false)
    const [newTask, setNewTask] = useState({})
    const [ServerResponse, setServerResponse] = useState("")
    const [showTask, setShowTask] = useState(false)
    const [message, setMessage] = useState("")
    const [messageStyle, setMessageStyle] = useState("")
    const [drop, setDrop] = useState(false)

    const getResponse = (response) => {
        setServerResponse(response)
    }


    const swapLoading = () => {
        setLoading(!loading)
    }
    useEffect(() => {
        if (ServerResponse.data !== undefined) {
            console.log(ServerResponse.data)
            setMessage(ServerResponse.data.message)
            setMessageStyle("success")
            setNewTask(ServerResponse.data.response)
            setLoading(false)
        }
        if (ServerResponse.fail !== undefined) {
            setMessage(ServerResponse.fail)
            setMessageStyle("danger")
            setShowTask(true)
            setLoading(false)
        }
    }, [ServerResponse])

    useEffect(() => {
        if (newTask.title !== undefined) setShowTask(true);
    }, [newTask])

    const clear = () => {
        setNewTask({})
        setMessage("")
        setMessageStyle("")
        setServerResponse({})
        setShowTask(false)
    }

    const ToggleDrop = () => {
        setDrop(!drop)
    }

    return (
        <Container fluid>
            <Row>
                <Col
                    style={{ height: "100%", marginRight: "0", maxWidth: "300px", marginTop: "70px", zIndex: "0" }} lg={3} xl={3}
                    className="d-none d-lg-block  p-0 position-fixed">
                    <ul>
                        <Link to='/'>
                            <li className="rounded">
                                Welcome
                            </ li>
                        </Link>
                        <Link to='/about'>
                            <li className="rounded">
                                About
                            </ li>
                        </Link>
                        <Link to='/'>
                            <li className="rounded">
                                Browse
                            </ li>
                        </Link>
                        <Link to='/insert'>
                            <li className="rounded">
                                Insert
                            </ li>
                        </Link>
                        <Link to='/'>
                            <li className="rounded">
                                Task History
                            </li>
                        </Link>

                    </ul>
                </Col>
                <Col md={12} xl={{ span: 7, offset: 2 }} className="p-0" lg={{ span: 9, offset: 3 }} style={{ marginTop: "70px", borderLeft: "1px solid #dee2e6" }}>
                    <Container className="mt-3 p-0" style={{ minWidth: "500px", maxWidth: "900px" }}>
                        <InsertForm sendResponse={getResponse} sendTask={swapLoading} clear={clear} style={{ color: "black", backgroundColor: "#FFFFFF" }} />
                        {loading ? (
                            <Container className="text-center">
                                <Spinner animation="border" role="status" />
                            </ Container>
                        ) : (
                            showTask ? (
                                <Container className="mb-3">
                                    <Alert variant={messageStyle} >Server Response: {message}</Alert>
                                    {newTask.title && <Card>
                                        <Card.Body>
                                            <Card.Title>Title:</Card.Title>
                                            <Card.Text>{newTask.title}</Card.Text>
                                            {/* <Form.Control type="text" placeholder={newTask.title} disabled readOnly className="w-auto"/> */}
                                            <Card.Title>Id:</Card.Title>
                                            <Card.Text>{newTask._id}</Card.Text>
                                            <Card.Title>Priority:</Card.Title>
                                            <Card.Text>{newTask.priority}</Card.Text>
                                            <Card.Title>Status:</Card.Title>
                                            <Card.Text>{newTask.status}</Card.Text>
                                            <Card.Title>Due Date:</Card.Title>
                                            <Card.Text>{newTask.dueDate}</Card.Text>
                                            <Card.Title>Description:</Card.Title>
                                            <textarea
                                                readOnly name="text" rows="14" wrap="soft" className="taskCardDescription border rounded" resize="none"
                                                style={{ height: "200px", overflowY: "auto", width: "100%", backgroundColor: "#e9ecef", resize: "none" }}>
                                                {newTask.description}
                                            </textarea>
                                        </Card.Body>
                                    </Card>}
                                </Container>
                            ) : (
                                <Container style={{ width: "100%" }}>
                                    <Card style={{ height: "300px", textAlign: "center" }} className="p-2 border">
                                        <Card.Body style={{ backgroundColor: "#282c34;" }}>
                                            <Card.Title>Fill the formulary and insert your task</Card.Title>
                                            <Card.Text>The result will be displayed here!</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Container>
                            )
                        )}
                    </Container>
                    <Space />
                </Col>
                <Col className="d-none d-xl-block sideFill" xl={2} style={{ marginRight: "0", marginTop: "70px" }}>
                    <Container style={{ borderLeft: "1px solid #dee2e6", marginTop: "10px" }}>
                        Update your pages <br />
                        here
                    </Container>
                </Col>
            </Row>

        </Container>
    )
}
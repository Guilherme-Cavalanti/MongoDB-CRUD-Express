import InsertForm from "../components/testeInsert"
import Container from "react-bootstrap/esm/Container"
import Card from "react-bootstrap/Card"
import Spinner from "react-bootstrap/Spinner"
import { useState, useEffect } from "react"
import Alert from "react-bootstrap/Alert"


export default function InsertPage() {

    const [loading, setLoading] = useState(false)
    const [newTask, setNewTask] = useState({})
    const [ServerResponse, setServerResponse] = useState("")
    const [showTask, setShowTask] = useState(false)
    const [message, setMessage] = useState("")

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
            setNewTask(ServerResponse.data.response)
            setLoading(false)
        }
    }, [ServerResponse])

    useEffect(() => {
        if (newTask.title !== undefined) setShowTask(true); console.log(newTask, message)
    }, [newTask])
    return (
        <Container className="mt-3" style={{ minWidth: "500px", maxWidth: "900px" }}>
            <InsertForm sendResponse={getResponse} sendTask={swapLoading} />
            {loading ? (
                <Container>
                    <Spinner animation="border" role="status" />
                </ Container>
            ) : (
                showTask ? (
                    <Container>
                        <Alert variant="success" >Server Response: {message}</Alert>
                        <Card>
                            <Card.Body>
                                <Card.Title>Title:</Card.Title>
                                <Card.Text>{newTask.title}</Card.Text>
                                <Card.Title>Priority:</Card.Title>
                                <Card.Text>{newTask.priority}</Card.Text>
                                <Card.Title>Status:</Card.Title>
                                <Card.Text>{newTask.status}</Card.Text>
                                <Card.Title>Due Date:</Card.Title>
                                <Card.Text>{newTask.dueDate}</Card.Text>
                                <Card.Title>Description:</Card.Title>
                                <Card.Text>{newTask.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Container>
                ) : (
                    <Container style={{ width: "100%" }}>
                        <Card style={{ height: "300px", textAlign: "center" }} className="p-2">
                            <Card.Body>
                                <Card.Title>Fill the formulary and insert your task</Card.Title>
                                <Card.Text>The result will be displayed here!</Card.Text>
                            </Card.Body>
                        </Card>
                    </Container>
                )
            )}
        </Container>
    )
}
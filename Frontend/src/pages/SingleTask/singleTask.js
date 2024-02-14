import { useSearchParams } from "react-router-dom"
import fetch from "../../fetch";
import { useEffect, useState } from "react";
import { TaskControl } from "../../components/TaskControl/taskControl";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Alert from "react-bootstrap/Alert"
import Space from "../../components/Space";
import Spinner from "react-bootstrap/esm/Spinner";

export function SingleTask() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");

    const [disable, setDisable] = useState(true)
    const [serverResponse, setServerResponse] = useState({})
    const [taskData, setTaskData] = useState({})
    const [taskForm, setTaskForm] = useState({})
    const [loading, setLoading] = useState(false)
    const [actionLoading, setActionLoading] = useState(false)
    const [onAction, setOnAction] = useState(false)
    const [message, setMessage] = useState("")
    const [error, setError] = useState(false)


    const updateTask = (task) => setTaskForm(task)

    const Disable = () => {
        setDisable(true);
        setMessage("")
    }
    const Enable = () => {
        setDisable(false); 
        setMessage("")
    }

    const { GetTaskbById } = fetch
    const { UpdateTask } = fetch
    const { DeleteTask } = fetch

    useEffect(() => {
        const ViewTask = async () => {
            setLoading(true)
            const data = await GetTaskbById(id)
            setServerResponse(data)
            console.log(data)
            setLoading(false)
        }
        ViewTask()
    }, [])


    const UpdateResponseData = () => {
        if (serverResponse.error !== undefined) {
            setMessage(serverResponse.message)
            setError(true)
            return
        }
        if (serverResponse.response !== undefined) {
            setTaskData(serverResponse.response)
        }
    }

    const ConfirmDelete = async () => {
        setActionLoading(true)
        const response = await DeleteTask(id)
        setMessage(response.message)
        setActionLoading(false)
    }

    useEffect(() => {
        if (taskForm.title !== undefined) {
            console.log(taskForm)
            const SendUpdate = async () => {
                setActionLoading(true)
                const response = await UpdateTask(id, taskForm)
                setMessage(response.message)
                setActionLoading(false)
            }
            SendUpdate()
            Disable()
        }
    }, [taskForm])

    useEffect(() => {
        if (!disable) setOnAction(true)
        else setOnAction(false)
    }, [disable])

    useEffect(() => {
        UpdateResponseData()
    }, [serverResponse])


    const CancelUpdate = () => setDisable(true)

    if (loading) return (
        <Container fluid>
            <Space />
            <Spinner animation="border" role="status" />
            <Space />
        </Container>
    )

    return (
        <Container fluid>
            <h1>Singular Thread Page</h1>
            {error ? (
                <>
                    <Alert variant="danger">{message}</Alert>
                    <Space />
                </>
            ) : (
                <>
                    <TaskControl info={taskData} disable={disable} cancel={CancelUpdate} update={updateTask} />
                    {!onAction ? (
                        <Row>
                            <Col xs={6} className="text-center">
                                <Button onClick={ConfirmDelete} variant="danger">Delete</Button>
                            </Col>
                            <Col xs={6} className="text-center">
                                <Button onClick={Enable} variant="primary">Update</Button>
                            </Col>
                        </Row>
                    ) : (
                        <Alert variant="warning">Change info caustiously</Alert>
                    )}
                    {actionLoading && <Spinner role="status" animation="border" className="mt-5" />}
                    {message!=="" && <Alert variant="info" className="mt-5">{message}</Alert>}
                </>
            )}



        </ Container>
    )
}
import Offcanvas from "react-bootstrap/Offcanvas"
import Container from "react-bootstrap/esm/Container"
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"
import { useContext, useState } from "react"
import "./header.css"
import { ThemeContext } from "./context/ThemeContext"
import ThemeButton from "./components/ThemeButton/ThemeButton"
import Sidebar from "./components/icons/Sidebar"

export default function Header() {

    const { switchTheme } = useContext(ThemeContext)
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container className="p-0 mr-0 ml-0 position-fixed header" fluid >
            <Row style={{ height: "70px", marginLeft: "0px", marginRight: "0px" }} className="px-2">
                <Col md={2} sm={2} xs={4} className="d-lg-none p-0">
                    <button onClick={handleShow} className="theme-button rounded" >
                        <Sidebar />
                    </button>
                    <Offcanvas show={show} onHide={handleClose} style={{ backgroundColor: "#1f2328", color: "#FFFFFF" }}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Task Manager</Offcanvas.Title>
                            <ThemeButton />
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            Some text as placeholder. In real life you can have the elements you
                            have chosen. Like, text, images, lists, etc.
                        </Offcanvas.Body>
                    </Offcanvas>
                </Col>
                <Col lg={10} md={4} sm={4} xs={8} className="p-0">
                    <Container className="m-0 p-0">
                        <h1>Hello guys</h1>
                    </Container>
                </Col>
                <Col lg={2} className="d-none d-lg-block">
                    <ThemeButton />
                </Col>
            </Row>

        </Container>
    )
}
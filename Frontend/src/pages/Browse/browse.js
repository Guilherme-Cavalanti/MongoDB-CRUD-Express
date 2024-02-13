import "./browse.css"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import { Outlet, Link } from "react-router-dom"
import Space from "../../components/Space"

export function BrowsePage() {
    return (
        <Container fluid>
            <Row>
                <Col
                    style={{ height: "100%", marginRight: "0", maxWidth: "300px", marginTop: "70px", zIndex: "0" }} lg={3} xl={3}
                    className="d-none d-lg-block  p-0 position-fixed">
                    <ul>
                        <Link to='home'>
                            <li className="rounded">
                                Get Started
                            </ li>
                        </Link>
                        <Link to='tasks'>
                            <li className="rounded">
                                Browse Tasks
                            </ li>
                        </Link>
                        <Link to='insert'>
                            <li className="rounded">
                                Insert Task
                            </ li>
                        </Link>
                        <Link to='deleted'>
                            <li className="rounded">
                                Task History
                            </li>
                        </Link>

                    </ul>
                </Col>
                <Col md={12} xl={{ span: 7, offset: 2 }} className="p-0" lg={{ span: 9, offset: 3 }} style={{ marginTop: "70px", borderLeft: "1px solid #dee2e6" }}>
                    <Container className="mt-3 p-0" style={{ minWidth: "500px", maxWidth: "900px" }}>
                        <Outlet />
                    </Container>
                    <Space />
                </Col>
                <Col className="d-none d-xl-block sideFill" xl={2} style={{ marginRight: "0", marginTop: "70px" }}>
                    <Container style={{ borderLeft: "1px solid #dee2e6", marginTop: "10px" }}>
                        Browse and changes your <br />
                        tasks here!
                    </Container>
                </Col>
            </Row>

        </Container>
    )
}
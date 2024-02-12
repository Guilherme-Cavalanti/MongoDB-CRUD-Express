import Container from "react-bootstrap/esm/Container"
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"
import Button from "react-bootstrap/esm/Button"
import "./homePage.css"

export function HomePage() {
    return (
        <div style={{ width: "100%" }}>
            <Container className=" front p-5" style={{ minWidth: "400px" }} fluid>
                <Row style={{ marginTop: "75px", marginBottom:"10px" }}>
                    <h1>Task Manager</h1>
                </Row>
                <Row style={{marginBottom:"10px"}}>
                    <h3>A MongoDB CRUD for task managing!</h3>
                </Row>
                <Row style={{marginBottom:"10px"}}>
                    <Col xs={6} sm={6} className="text-end">
                        <Button>Browse</Button>
                    </Col>
                    <Col xs={6} sm={6} className="text-start">
                        <Button>About</Button>
                    </Col>
                </Row>
                <Row>
                    <p>Enjoy it!</p>
                </Row>
            </Container>
            <Container fluid>
                <Row style={{ marginTop: "20px", paddingTop:"2%", paddingBottom:"4%" }} className="justify-content-center">
                    <Col lg={{ span: 3, offset: 0 }} md={12} className="text-start">
                        <Container >
                            <h3>Manage your Tasks!</h3>
                            <p>
                                Stay organized and productive with our task management tool. Browse, filter, update, and delete tasks effortlessly.

                            </p>
                            <p>
                                Keeping your to-do list streamlined and manageable, browse and filter your tasks however you want.
                            </p>
                        </Container>
                    </Col>
                    {/* <Col lg={1} className="d-none d-lg-block" /> */}
                    <Col lg={3} md={12} className="text-start">
                        <Container>
                            <h3>Insert new tasks!</h3>
                            <p>
                                Need to add a new task? Our easy-to-use interface lets you insert tasks with titles, descriptions, and other details in seconds,
                                ensuring nothing falls through the cracks.
                            </p>
                            <p>
                                Just fill in the insert form and start putting your new tasks here, perfectly customized for your needs.
                            </p>
                        </Container>
                    </Col>
                    {/* <Col lg={1} className="d-none d-lg-block" /> */}
                    <Col lg={3} md={12} className="text-start">
                        <Container >
                            <h3>Deleted task history!</h3>
                            <p>
                                Accidentally deleted a task? No problem. With our deleted task history feature, you can manage and restore deleted tasks.
                            </p>
                            <p>
                                Providing peace of mind and ensuring nothing is lost, go check your deleted tasks tab.
                            </p>
                        </Container>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
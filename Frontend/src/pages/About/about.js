import Container from "react-bootstrap/esm/Container"
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"

export function AboutPage() {
    return (
        <div style={{ width: "100%" }}>
            <Container className=" front p-5" style={{ minWidth: "400px" }} fluid>
                <Row style={{ marginTop: "70px" }}>
                    <Col lg={{ span: 5, offset: 1 }} md={12} className="text-start">
                        <h2>Interface</h2>
                        <p>This is the Interface of a CRUD System implemented using MongoDB, for this interface to work u need to run the node.js backend of this application.</p>
                        <p>The server must be running on localhost:4000, it should display logs on the console informing the actions being made.</p>
                    </Col>
                    <Col lg={5} md={12} className="text-start">
                        <h2>Database</h2>
                        <p>For this CRUD to run, you will need to create a free database on <a href="http://www.mongodb.com" target="blank">MongoDB</a>, using Atlas, their online database.</p>
                        <p>Log in and create a new database using the Free Tier Cluster, after that set the backend environment variables as explained in the GitHub Repository README file</p>
                    </Col>
                </Row>
            </Container>
            <Container className="p-3" style={{ minWidth: "400px" }} fluid>
                <Row>
                    <Col lg={{ span: 5, offset: 1 }} md={12} className="text-start">
                        <h2>Source Code</h2>
                        <p>The entire code used on this project is accessible in  Github, to see the Repository <a href="https://www.github.com" target="blank" className="text-decoration-underline">
                            click here</a>, clone it so you can the server locally.
                        </p>
                        <p>
                            There are 3 instances of this application, the database, backend and frontend, ensure the first two are running properly to use this interface.
                        </p>
                        <p>
                            Before trying to run this project, make sure you already have a database created on Atlas, and check your connection auths properly in their website.
                        </p>
                    </Col>
                    <Col lg={5} md={12} className="text-start">
                        <h2>Readying</h2>
                        <p>
                            To check if this Interface is ready to use, run on your terminal at the Backend directory: "node server.js", if it prints "Server online" and "Connected to
                            database!", its ready and you can use this interface normally.
                        </p>
                        <p>
                            If you're having trouble running the server.js, consider trying npm install or npm update to get all the dependencies needed.
                        </p>
                        <p>If your problem is with the database connection, then check how to properly configure the .env files on the README.md in the Backend directory,
                            it should guide you step by step.
                        </p>
                    </Col>
                </Row>
            </Container>
        </ div>
    )
}
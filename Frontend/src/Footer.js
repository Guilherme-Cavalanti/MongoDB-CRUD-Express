import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import "./footer.css"

export function Footer() {
    return (
        <Container style={{ height: "350px", borderTop: "1px solid #dee2e6"}} className="footer" fluid>
            <Row className="justify-content-center" style={{minWidth:"400px", paddingTop:"2%"}}>
                <Col xs={4} className="text-start">
                    <h4>About</h4>
                    <p>
                        This website was developed using ReactJS, it accesses an API developed in Node.js that communicates with a MongoDB online database on Atlas.
                    </p>
                </Col>
                <Col xs={4} className="text-start">
                    <h4>Github:</h4>
                    <p>
                        Check more about this code on the github repository:
                    </p>
                    <p>
                        dasdasdasda.com
                    </p>
                </ Col>
            </Row>
        </Container>
    )
}
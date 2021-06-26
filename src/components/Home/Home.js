import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css"
export default function Home() {
    return (
        <Container>
            <Row>
                <Col md={6} className="about-description">
                    <div className="heading">
                    Learnology - A better way to learn through AR
                    </div>
                    <div className="content">

                    </div>
            </Col>
            <Col md={4} className="img">
               <img src="https://image.freepik.com/free-vector/scientists-studying-coronavirus-team-experts-doing-medical-research-flat-vector-illustration-virus-pandemic-science_74855-8579.jpg" 
               alt="study"
               />
            </Col>
        </Row>
    </Container >
    )
}

import React from 'react';
import { Card, Col, Container, Row } from "react-bootstrap";

function ProjectCard(props) {
    const images = require.context('../Assets/Images/ProjectImg',true);
    const imagePaths = images.keys().map((image) => images(image));

    return (
        <Container fluid="true" className="mb-3">
            <Row className="mx-0">
                {
                    imagePaths.map((imagePath, index) => (
                        <Col className="mt-3" lg={4} md={4} sm={6} key={index}>
                            <Card>
                                <Card.Body>
                                    <Card.Img src={imagePath}/>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
}

export default ProjectCard;

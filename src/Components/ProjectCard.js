// ProjectCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Container, Row } from "react-bootstrap";


function ProjectCard({projectData}) {
    return (
        <Container fluid className="mb-3">
            <Row className="mx-0">
                {projectData.map((project, index) => (
                    <Col className="mt-2" lg={3} md={4} sm={6} key={index}>
                        <Link to={`/projects/${project.link}`}>
                            <Card className="cardBg">
                                <Card.Body className="p-0">
                                    <Card.Img className="cardImg" src={project.image} />
                                </Card.Body>
                                <Card.Footer className="description px-2 mx-0">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa explicabo impedit, libero minima nemo veniam?
                                </Card.Footer>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ProjectCard;

// ProjectCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Container, Row } from "react-bootstrap";
import projectData from "./ProjectConfig";

function ProjectCard(props) {
    return (
        <Container fluid className="mb-3">
            <Row className="mx-0">
                {projectData.map((project, index) => (
                    <Col className="mt-3" lg={4} md={4} sm={6} key={index}>
                        <Link to={`/projects/${project.link}`}>
                            <Card>
                                <Card.Body>
                                    <Card.Img src={project.image} />
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ProjectCard;

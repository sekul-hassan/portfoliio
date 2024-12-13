// ProjectCard.js
import React from 'react';
import {Link} from 'react-router-dom';
import {Card, Col, Container, Row} from "react-bootstrap";

function ProjectCard({ projectData }) {
    // Function to truncate description to 100 characters considering the title length
    const truncateDescription = (description, title) => {
        const combinedText = `${title}: ${description}`;
        // Ensure the combined text doesn't exceed 100 characters
        const ans1 = combinedText.length > 100 ? combinedText.slice(0, 100) + '...' : combinedText;
        const len1= title.length;
        return combinedText.slice(len1+1, ans1.length);
    };

    return (
        <Container fluid className="mb-3">
            <Row className="mx-0">
                {projectData.map((project, index) => (
                    <Col className="mt-2"  lg={3} md={4} sm={6} key={index}>
                        <Link to={`/projects/${project.link}`}>
                            <Card className="cardBg" style={{minHeight:"337px"}}>
                                <Card.Body className="p-0">
                                    <Card.Img className="cardImg" src={project.image} />
                                </Card.Body>
                                <Card.Footer className="description px-2 mx-0">
                                    {/* Use truncateDescription function for both title and description */}
                                    <p className="description"><strong className="title1">{project.title} : </strong> {truncateDescription(project.description, project.title)}
                                    </p>
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

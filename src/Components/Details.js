import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CustomCarousel from "./CustomCarousel";

function Details({project}) {
    return (
       <Container fluid="true">
           <Row className="mx-0">
               <Col sm={12} md={6} lg={6} className="projectFeature mt-3 px-3">
                   <h4 className="text-center title">Feature Images</h4>
                   <CustomCarousel images={project.image}/>
               </Col>
               <Col sm={12} md={6} lg={6} className="projectDetails mt-3 px-3">
                   <h4 className="text-center title">{project.title}</h4>
                   <p className="description">{project.description}</p>
                   <h4 className="description">Github link : <a className="description" href={project.gitHubLink} target="_blank" rel="noreferrer">{project.gitHubLink}</a></h4>
                   {project.projectLink && (
                       <h4 className="description">Live project link : <a className="description" href={project.projectLink} target="_blank" rel="noreferrer">{project.projectLink}</a></h4>
                   )}
               </Col>

           </Row>
       </Container>
    );
}

export default Details;


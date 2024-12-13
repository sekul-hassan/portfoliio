import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CustomCarousel from "./CustomCarousel";

function Details({project}) {
    return (
       <Container fluid="true" className="skillBg px-lg-5 p-md-4 p-sm-3">
           <Row className="mx-0 pt-lg-0">
               <h3 className="title text-center">Project Overview</h3>
               <Col sm={12} md={6} lg={6} className="projectFeature mt-3 px-3">
                   <h4 className="text-center title">Feature Images</h4>
                   <CustomCarousel images={project.images}/>
               </Col>
               <Col sm={12} md={6} lg={6} className="projectDetails mt-3 px-3">
                   <h4 className="text-center title">{project.title}</h4>
                   <p className="description">{project.description}</p>

                   {project.frontEndLink && (
                       <h4 className="description"><strong>Frontend Link :</strong> <a className="description text-primary" href={project.frontEndLink}
                                                                                       target="_blank"
                                                                                       rel="noreferrer">{project.frontEndLink}</a></h4>
                   )}
                   {project.backendLink &&
                       <h4 className="description"><strong>Backend Link : </strong><a className="description text-primary" href={project.backendLink}
                                                                     target="_blank"
                                                                     rel="noreferrer">{project.backendLink}</a></h4>
                   }
                   {project.liveLink &&
                       <h4 className="description"><strong>Live Link : </strong><a className="description text-primary" href={project.liveLink}
                                                                    target="_blank"
                                                                    rel="noreferrer">{project.liveLink}</a></h4>
                   }
               </Col>

           </Row>
       </Container>
    );
}

export default Details;


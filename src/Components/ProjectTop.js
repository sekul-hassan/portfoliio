import React from 'react';
import {Container, Row} from "react-bootstrap";

function ProjectTop({text}) {
    return (
       <Container fluid="true" className="projectTopBg">
           <Row className="mx-0 projectTopBgOverlay">
               <div className="content">
                   <h4 className="title text-white">{text}</h4>
               </div>
           </Row>
       </Container>
    );
}

export default ProjectTop;

import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CountUp from "react-countup";

function Counting(props) {
    return (
       <Container fluid="true" className="countBg text-center ">
           <Row className="countBgOverlay mx-0">
               <h3 className="title text-white rmb-5">Number of Projects</h3>
               <Col md={4} lg={4} sm={4} >
                   <h3 className="subTitle text-white">React</h3>
                   <CountUp className="subTitle text-white" start={0} end={11}/>
               </Col>
               <Col md={4} lg={4} sm={4}>
                   <h3 className="subTitle text-white">Spring Boot</h3>
                   <CountUp className="title text-white" start={0} end={3}/>
               </Col>
               <Col md={4} lg={4} sm={4}>
                   <h3 className="subTitle text-white">Node Express</h3>
                   <CountUp className="title text-white" start={0} end={5}/>
               </Col>
           </Row>
       </Container>
    );
}

export default Counting;


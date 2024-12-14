import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import sekul from "../Assets/Images/sekul.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faLinkedin, faYoutube} from "@fortawesome/free-brands-svg-icons";

function AboutMeFront(props) {

    const callFunction = ()=>{
        window.open('https://www.facebook.com/sekul.hassan', '_blank');
    }

    return (
        <Container fluid="true" className="aboutMeRow">
            <h2 className="title text-center">About me</h2>
            <Row className="mt-2 mx-0 ">
                <Col className="mt-2 aboutImgCol" md={6} lg={5} sm={12}>
                    <img className="aboutImg" src={sekul} alt="sekul"/>
                    <div className="iconDiv">
                        <a className="footerLink" href="https://bd.linkedin.com/in/sekul-hassan" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a>
                        <a className="footerLink" href="https://github.com/sekul-hassan" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
                        <a className="footerLink" href="https://www.facebook.com/sekul.hassan" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook}/></a>
                        <a className="footerLink" href="https://www.youtube.com/@RecursiveEducation-Friends" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube}/></a>
                    </div>
                </Col>
                <Col className="mt-2 aboutRightCol" md={6} lg={5} sm={12}>
                    <div className="aboutRightDiv">
                        <h4 className="title">SEKUL HASSAN</h4>
                        <h5 className="subTitle text-dark">Software Engineer</h5>
                        <h6 className="description">
                            Sekul Hassan is a skilled Software Engineer with a strong foundation in web development and project management.
                            With a passion for creating efficient
                            and user-friendly solutions, Sekul has demonstrated expertise in both academic and professional settings.
                        </h6>
                        <button onClick={callFunction} className="commonBtn text-uppercase">Contact Now</button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutMeFront;

import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

function AboutTop({abouts}) {
    return (
        <Container fluid="true" className="text-dark skillBg">
            <Row className="mx-0 p-4">
                <Col className=" text-center" sm={3} md={3} lg={3}>
                    <img className="profileImg" src={abouts.image} alt=""/>
                    <h4 className="title mt-2">{abouts.name}</h4>
                    <h4 className="boldDescription"><strong><a className="text-decoration-none"
                                                               href="https://recursiveeducation.com" target="_blank"
                                                               rel="noreferrer">{abouts.description}</a></strong>
                    </h4>
                </Col>
                <Col className="" sm={9} md={9} lg={9}>
                    <div className="mx-0">
                        <p className="description"><span
                            className="boldDescription">University : </span>{abouts.academic.university}</p>
                        <p className="description"><span
                            className="boldDescription">College : </span>{abouts.academic.college}
                        </p>
                        <p className="description"><span
                            className="boldDescription">School : </span>{abouts.academic.school}</p>
                        <p className="description"><span
                            className="boldDescription">Current Address : </span>{abouts.currentAddress}</p>
                        <p className="description"><span
                            className="boldDescription">Permanent Address : </span>{abouts.permanentAddress}</p>
                        <p className="description"><span className="boldDescription">Religion : </span>{abouts.religion}
                        </p>
                        <p className="description"><span
                            className="boldDescription">Marital Status : </span>{abouts.maritalStatus}</p>
                        <p className="description"><span className="boldDescription">Date of Birth : </span>{abouts.dob}
                        </p>
                        <p className="description"><span
                            className="boldDescription">Contact Number : </span>{abouts.phone}</p>
                        <p className="description"><span className="boldDescription">E-mail : </span><a
                            className="text-decoration-none" href={abouts.email}> {abouts.email}</a></p>
                        <p className="description"><span className="boldDescription">LinkedIn : </span><a
                            className="text-decoration-none" href={abouts.linkedIn}>{abouts.linkedIn}</a></p>
                        <p className="description"><span className="boldDescription">Github : </span><a
                            className="text-decoration-none" href={abouts.gitHub}>{abouts.gitHub}</a></p>
                    </div>
                </Col>
            </Row>


        </Container>
    );
}

export default AboutTop;


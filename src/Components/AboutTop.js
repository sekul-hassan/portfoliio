import React from 'react';
import {Container} from "react-bootstrap";

function AboutTop({abouts}) {
    return (
        <Container fluid="true" className="text-dark skillBg mt-3">
            <div className="mx-0 profile">
                <img className="profileImg" src={abouts.image} alt=""/>
            </div>
            <div className="mx-0 profile">
                <h4 className="title">{abouts.name}</h4>
            </div>
            <div className="mx-0 profile">
                <h4 className="boldDescription"><strong><a className="text-decoration-none" href="https://recursiveeducation.com" target="_blank" rel="noreferrer">{abouts.description}</a></strong></h4>
            </div>
            <div className="contact mx-0 px-5 py-4">
                <p className="description"><span
                    className="boldDescription">University : </span>{abouts.academic.university}</p>
                <p className="description"><span className="boldDescription">College : </span>{abouts.academic.college}</p>
                <p className="description"><span className="boldDescription">School : </span>{abouts.academic.school}</p>
                <p className="description"><span className="boldDescription">Current Address : </span>{abouts.currentAddress}</p>
                <p className="description"><span className="boldDescription">Permanent Address : </span>{abouts.permanentAddress}</p>
                <p className="description"><span className="boldDescription">Religion : </span>{abouts.religion}</p>
                <p className="description"><span className="boldDescription">Marital Status : </span>{abouts.maritalStatus}</p>
                <p className="description"><span className="boldDescription">Date of Birth : </span>{abouts.dob}</p>
                <p className="description"><span className="boldDescription">Contact Number : </span>{abouts.phone}</p>
                <p className="description"><span className="boldDescription">E-mail : </span><a className="text-decoration-none" href={abouts.email}> {abouts.email}</a></p>
                <p className="description"><span className="boldDescription">LinkedIn : </span><a className="text-decoration-none" href={abouts.linkedIn}>{abouts.linkedIn}</a></p>
                <p className="description"><span className="boldDescription">Github : </span><a className="text-decoration-none" href={abouts.gitHub}>{abouts.gitHub}</a></p>
            </div>
        </Container>
    );
}

export default AboutTop;


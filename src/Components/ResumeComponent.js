import React, {Fragment} from 'react';
import "../Assets/CSS/Resume.css";
import {Col, Container, Row} from "react-bootstrap";
import resumeInfo from "../Configuration/ResumeConfig";

function ResumeComponent(props) {
    return (
       <Container fluid="true" className="mt-4 mb-3 resumeBody text-white">
           <Row className="mx-0">
               <Col md={4} sm={4} lg={4} className="resumeLeft px-0">
                   <div>
                       <img className="resumeProfile mt-3" src={resumeInfo.mySelf.photo} alt=""/>
                   </div>
                   <h4 className="title text-white mt-3">Contact</h4>
                   <hr className="hrClass"/>
                   {
                       resumeInfo.contact.map((data)=> (
                           <Fragment>
                               <h4 className="boldDescription text-white mt-3">{data.name}</h4>
                               <h5 className="description text-white">{data.value}</h5>
                           </Fragment>
                       ))
                   }
                   <h4 className="title mt-3 text-white">Education</h4>
                   <hr className="hrClass"/>
                   {
                       resumeInfo.education.map((data)=>(
                           <Fragment>
                               <h4 className="boldDescription text-white mt-3">{data.degree}</h4>
                               <h4 className="description text-white">{data.institute}</h4>
                           </Fragment>
                       ))
                   }
                   <h4 className="title text-white mt-3">Expertise</h4>
                   <hr className="hrClass mb-3"/>
                   {
                       resumeInfo.expertise.map((data)=> (
                           <li className="description text-white">{data.name}</li>
                       ))
                   }
               </Col>
               <Col md={8} sm={8} lg={8} className="resumeRight px-0 text-dark">
                   <h3 className="title">{resumeInfo.mySelf.name}</h3>
                   <h5 className="boldDescription">{resumeInfo.mySelf.designation}</h5>
                   <h6 className="description text-dark">{resumeInfo.mySelf.description}</h6>
                   <h4 className="title mt-3">Projects</h4>
                   <hr className="hrClass text-dark"/>
                   {
                       resumeInfo.projects.map((data)=> (
                           <div className="mt-3 description">
                               <a className="text-decoration-none boldDescription" href="https://recursiveeducaion.com" target="_blank" rel="noreferrer"><strong>{data.name}</strong></a> : {data.description}
                               <br/>
                               {data.liveLink && <Fragment>Live Link : <a className="text-decoration-none" href={data.liveLink} target="_blank" rel="noreferrer"> {data.liveLink} </a></Fragment>}
                               <br/>
                               {data.gitHubLink && <Fragment> Github Link : <a className="text-decoration-none" href={data.gitHubLink} target="_blank" rel="noreferrer"> {data.gitHubLink} </a></Fragment>}
                           </div>
                       ))
                   }

                   <div className="mt-3">
                       <h4 className="title">References</h4>
                       <hr className="hrClass text-dark"/>
                       {
                           resumeInfo.references.map((data)=> (
                               <h4 className="description mt-3">{data.name} {data.value}</h4>
                           ))
                       }
                   </div>
               </Col>
           </Row>
       </Container>
    );
}

export default ResumeComponent;

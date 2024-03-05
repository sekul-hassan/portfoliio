import React, {Fragment} from 'react';
import "../Assets/CSS/Resume.css";
import {Col, Container, Row} from "react-bootstrap";
import resumeInfo from "../Configuration/ResumeConfig";

function ResumeComponent(props) {
    return (
       <Container id="resume_component" fluid="true" className="mt-4 mb-3 resumeBody text-white">
           <Row className="mx-0">
               <Col md={5} sm={5} lg={5} className="resumeLeft px-0">
                   <div className="mb-3">
                       <div>
                           <img className="resumeProfile mt-3" src={resumeInfo.mySelf.photo} alt=""/>
                       </div>
                       <h4 className="title text-white mt-3">Contact</h4>
                       <hr className="hrClass"/>
                       {
                           resumeInfo.contact.map((data)=> (
                               data.name==="Portfolio" || data.name==="Github" || data.name==="LinkedIn" ? (
                                   <Fragment>
                                       <h4 className="boldDescription text-white mt-3">{data.name}</h4>
                                       <a href={data.value} target="_blank" className="resumeDescription text-white text-decoration-none m-0 p-0" rel="noreferrer">{data.value}</a>
                                   </Fragment>
                               ):(
                                   <Fragment>
                                       <h4 className="boldDescription text-white mt-3">{data.name}</h4>
                                       <h5 className="resumeDescription text-white">{data.value}</h5>
                                   </Fragment>
                               )
                           ))
                       }
                       <h4 className="title mt-3 text-white">Education</h4>
                       <hr className="hrClass"/>
                       {
                           resumeInfo.education.map((data)=>(
                               <Fragment>
                                   <h4 className="boldDescription text-white mt-3">{data.degree}</h4>
                                   <h4 className="resumeDescription text-white">{data.institute}</h4>
                               </Fragment>
                           ))
                       }
                       <h4 className="title text-white mt-3">Expertise</h4>
                       <hr className="hrClass mb-3"/>
                       {
                           resumeInfo.expertise.map((data,idx)=> (
                               <h5 className="resumeDescription text-white">{idx+1}. {data.name}</h5>
                           ))
                       }
                   </div>
               </Col>
               <Col md={7} sm={7} lg={7} className="resumeRight px-0 text-dark">
                   <h3 className="title">{resumeInfo.mySelf.name}</h3>
                   <h5 className="boldDescription pl-3">{resumeInfo.mySelf.designation}</h5>
                   <h6 className="description text-dark mt-4 pl-3">{resumeInfo.mySelf.description}</h6>
                   <h4 className="title mt-3">Projects</h4>
                   <hr className="hrClass text-dark"/>
                   {
                       resumeInfo.projects.map((data)=> (
                           <div className="mt-2 description">
                               <a className="text-decoration-none boldDescription pl-3" href="https://recursiveeducaion.com" target="_blank" rel="noreferrer">{data.name}</a> : {data.description}
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

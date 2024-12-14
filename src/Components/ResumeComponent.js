import React, {Fragment} from 'react';
import "../Assets/CSS/Resume.css";
import {Col, Container, Row, Table} from "react-bootstrap";
import resumeInfo from "../Configuration/ResumeConfig";

function ResumeComponent(props) {
    return (
       <Container id="resume_component" fluid="true" className="pc-1 text-white" style={{height: "1040px"}}>
           <Row className="mx-0 resumeBody">
               <Col md={4} sm={4} lg={4} className="resumeLeft">
                   <div className="mb-3">
                       <div>
                           <img className="resumeProfile mt-3" src={resumeInfo.mySelf.photo} alt=""/>
                       </div>
                       <h4 className="resumeTitle text-white mt-3">Contact</h4>
                       <hr className="hrClass"/>
                       <h4 className="resumeBoldDescription text-white mt-3">Portfolio</h4>
                       <a target="_blank" className="resumeDescription text-white text-decoration-none m-0 p-0" rel="noreferrer" href="https://sekul-hassan.github.io/portfoliio">https://sekul-hassan.github.io</a>

                       <h4 className="resumeBoldDescription text-white mt-3">LinkedIn</h4>
                       <a target="_blank" className="resumeDescription text-white text-decoration-none m-0 p-0" rel="noreferrer" href="https://bd.linkedin.com/in/sekul-hassan">https:linkedin.com/sekul-hassan</a>

                       {
                           resumeInfo.contact.map((data)=> (
                               data.name==="Portfolio" || data.name==="Github" || data.name==="LinkedIn" ? (
                                   <Fragment>
                                       <h4 className="resumeBoldDescription text-white mt-3">{data.name}</h4>
                                       <a href={data.value} target="_blank" className="resumeDescription text-white text-decoration-none m-0 p-0" rel="noreferrer">{data.value}</a>
                                   </Fragment>
                               ):(
                                   <Fragment>
                                       <h4 className="resumeBoldDescription text-white mt-3">{data.name}</h4>
                                       <h5 className="resumeDescription text-white">{data.value}</h5>
                                   </Fragment>
                               )
                           ))
                       }
                       <h4 className="resumeTitle mt-3 text-white">Education</h4>
                       <hr className="hrClass"/>
                       {
                           resumeInfo.education.map((data)=>(
                               <Fragment>
                                   <h4 className="resumeBoldDescription text-white mt-3">{data.degree}</h4>
                                   <h4 className="resumeDescription text-white">{data.institute}</h4>
                               </Fragment>
                           ))
                       }
                       <h4 className="resumeTitle text-white mt-3">Expertise</h4>
                       <hr className="hrClass mb-3"/>
                       {
                           resumeInfo.expertise.map((data,idx)=> (
                               <h5 className="resumeDescription text-white">{idx+1}. {data.name}</h5>
                           ))
                       }
                   </div>
               </Col>

               <Col md={8} sm={8} lg={8} className="resumeRight px-0 text-dark">
                   <h3 className="resumeTitle">{resumeInfo.mySelf.name}</h3>
                   <h5 className="resumeBoldDescription mbNeg">{resumeInfo.mySelf.designation}</h5>
                   <h6 className="resumeDescription text-dark mt-1">{resumeInfo.mySelf.description}</h6>
                   <h4 className="resumeTitle mt-2">Projects</h4>

                   {
                       resumeInfo.projects.map((data)=> (
                           <div className="mt-2 resumeDescription">
                               <hr className="hrClass mb-2 text-dark"/>
                               <span className="text-decoration-none resumeDescription pl-3">{data.name}</span>: {data.description}
                               <br/>
                               {data.frontendLink &&
                                   <Fragment> <a className="text-primary resumeDescription" href={data.frontendLink}
                                                            target="_blank"
                                                            rel="noreferrer"> {data.frontendLink} </a></Fragment>}
                               <br/>
                               {data.backendLink &&
                                   <Fragment>  <a className="text-primary resumeDescription" href={data.backendLink}
                                                               target="_blank" rel="noreferrer"> {data.backendLink} </a></Fragment>}
                           </div>
                       ))
                   }

                   <div className="mt-2">
                       <h4 className="resumeTitle">Educational Qualifications</h4>
                       <Table className="border table-striped table-hover mt-2 p-0 text-center">
                           <thead>
                           <tr className="resumeBoldDescription">
                               <td>Degree</td>
                               <td>Institute</td>
                               <td>Pass</td>
                               <td>Result</td>
                           </tr>
                           </thead>
                           <tbody>
                           {
                               resumeInfo.educationalQualifications.map((data) => (
                                   <tr className="resumeDescription">
                                       <td>{data.degree}</td>
                                       <td>{data.institute}</td>
                                       <td>{data.passingYear}</td>
                                       <td>{data.result}</td>
                                   </tr>
                               ))
                           }
                           </tbody>
                       </Table>

                   </div>
               </Col>
           </Row>
       </Container>
    );
}

export default ResumeComponent;

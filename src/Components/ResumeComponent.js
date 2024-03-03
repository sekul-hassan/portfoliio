import React from 'react';
import "../Assets/CSS/Resume.css";
import {Col, Container, Row} from "react-bootstrap";
import profile from "../Assets/Images/profile.jpg"

function ResumeComponent(props) {
    return (
       <Container fluid="true" className="mt-4 mb-3 resumeBody text-white">
           <Row className="mx-0">
               <Col md={4} sm={4} lg={4} className="resumeLeft px-0">
                   <div>
                       <img className="resumeProfile mt-3" src={profile} alt=""/>
                   </div>
                   <h4 className="title text-white mt-3">Contact</h4>
                   <hr className="hrClass"/>
                   <h4 className="boldDescription text-white mt-3">Phone</h4>
                   <h5 className="description text-white">01824340471</h5>

                   <h4 className="boldDescription text-white mt-3">Email</h4>
                   {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                   <h4 className="description text-white"><a>sekulhassan3031@gmail.com</a></h4>

                   <h4 className="boldDescription text-white mt-3">Address</h4>
                   <h4 className="description text-white">JU,Saver,Dhaka</h4>

                   <h4 className="title mt-3 text-white">Education</h4>
                   <hr className="hrClass"/>
                   <h4 className="boldDescription text-white mt-3">2019 H.S.C</h4>
                   <h4 className="description text-white">Netrakone Govt. College</h4>

                   <h4 className="boldDescription text-white mt-3">2015 B.sc in CSE</h4>
                   <h4 className="description text-white">Jahangirnagar University, Saver, Dhaka, Bangladesh</h4>

                   <h4 className="title text-white mt-3">Expertise</h4>
                   <hr className="hrClass"/>
                   <li className="description mt-3 text-white">Problem Solving</li>
                   <li className="description text-white">DSA</li>
                   <li className="description text-white">Git & Github, Github Action, Basic Docker</li>
                   <li className="description text-white">Managing Digital Ocean Cloud Server</li>
                   <li className="description text-white">C, C++, Java</li>
                   <li className="description text-white">DBMS MySql</li>
                   <li className="description text-white">bKash API integration</li>
                   <li className="description text-white">HTML, CSS, Bootstrap, Javascript</li>
                   <li className="description text-white">React</li>
                   <li className="description text-white mb-3">Spring Boot</li>
               </Col>
               <Col md={8} sm={8} lg={8} className="resumeRight px-0 text-dark">
                   <h3 className="title">Sekul Hassan</h3>
                   <h5 className="boldDescription">Software Engineer</h5>
                   <h6 className="description text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet harum inventore nam neque nisi
                       quae quasi quisquam quo, rem repellat. Accusamus aliquam animi asperiores aspernatur consequuntur
                       deleniti, facilis fugiat hic maiores officiis quia quis repudiandae sint, sit voluptas. Atque aut
                       consequuntur corporis culpa cum deserunt doloremque, doloribus eligendi eos fugit mollitia
                       numquam repudiandae. A ab asperiores, aspernatur commodi cumque debitis dignissimos dolore ex
                       harum impedit ipsa itaque labore laboriosam magni molestiae mollitia, nemo non omnis quam quia
                       repudiandae sed ut vitae! Accusantium architecto at, delectus ea eos facere id labore natus
                       nesciunt optio quam repudiandae sapiente sunt! Id, laborum officiis?</h6>
                   <h4 className="title mt-3">Projects</h4>
                   <hr className="hrClass text-dark"/>
                   <div className="mt-3 description">
                       <a className="text-decoration-none boldDescription" href="https://recursiveeducaion.com" target="_blank"
                          rel="noreferrer"><strong>Recursive Education</strong></a> :
                       This is a learning (Academic and Software Development) platform. Live Link :
                       <a className="text-decoration-none" href="https://recursiveeducaion.com" target="_blank"
                          rel="noreferrer"> https://recursiveeducaion.com </a>
                       Github Link : <a className="text-decoration-none" href="https://recursiveeducaion.com"
                                        target="_blank" rel="noreferrer"> https://recursiveeducaion.com </a>
                   </div>
                   <div className="description mt-3">
                       <a className="text-decoration-none boldDescription" href="https://recursiveeducaion.com" target="_blank"
                          rel="noreferrer"><strong>Mess Management</strong></a> :
                       This is a mess management web platform, here any one can manage his mess including Mess Member,
                       Meal Rate, Daily Bazar Bills etc. Live Link :
                       <a className="text-decoration-none" href="https://recursiveeducaion.com" target="_blank"
                          rel="noreferrer"> https://recursiveeducaion.com </a>
                       Github Link : <a className="text-decoration-none" href="https://recursiveeducaion.com"
                                        target="_blank" rel="noreferrer"> https://recursiveeducaion.com </a>
                   </div>
                   <div className="description mt-3">
                       <a className="text-decoration-none boldDescription" href="https://recursiveeducaion.com" target="_blank"
                          rel="noreferrer"><strong>Biye Shadi</strong></a> :
                       This project is developed by inspiring Matrimoni site. After creating an account in this site any
                       one can find out his/her life partner. Live Link :
                       <a className="text-decoration-none" href="https://recursiveeducaion.com" target="_blank"
                          rel="noreferrer"> https://recursiveeducaion.com </a>
                       Github Link : <a className="text-decoration-none" href="https://recursiveeducaion.com"
                                        target="_blank" rel="noreferrer"> https://recursiveeducaion.com </a>
                   </div>
                   <div className="description mt-3">
                       <a className="text-decoration-none boldDescription" href="https://recursiveeducaion.com" target="_blank"
                          rel="noreferrer"><strong>NCPC 2023 Registration site</strong></a> :
                       This site is made for registration of ncpc contestants. Main learning outcome of this project is
                       team work and how can handle pressure. Live Link :
                       <a className="text-decoration-none" href="https://recursiveeducaion.com" target="_blank"
                          rel="noreferrer"> https://recursiveeducaion.com </a>
                       Github Link : <a className="text-decoration-none" href="https://recursiveeducaion.com"
                                        target="_blank" rel="noreferrer"> https://recursiveeducaion.com </a>
                   </div>
                   <div className="description mt-3">
                       <a className="text-decoration-none boldDescription" href="https://recursiveeducaion.com" target="_blank"
                          rel="noreferrer"><strong>Designer</strong></a> :
                       Which is cloned site of a theme from there forest. It is my first practice designed website using React. Live Link :
                       <a className="text-decoration-none" href="https://recursiveeducaion.com" target="_blank"
                          rel="noreferrer"> https://recursiveeducaion.com </a>
                       Github Link : <a className="text-decoration-none" href="https://recursiveeducaion.com"
                                        target="_blank" rel="noreferrer"> https://recursiveeducaion.com </a>
                   </div>

                   <div className="mt-3">
                       <h4 className="title">References</h4>
                       <hr className="hrClass text-dark"/>
                       <h4 className="description mt-3">XYZ, Company name</h4>
                       <h4 className="description mb-3">ABC, Company name</h4>
                   </div>
               </Col>
           </Row>
       </Container>
    );
}

export default ResumeComponent;

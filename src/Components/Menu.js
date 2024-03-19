import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

function Menu(props) {
    return (
       <Container fluid="true">
           <Navbar expand="md" className="navBackground px-4">
               <Link to="/"><Navbar.Brand href="#"><img className="logoImg" src="https://recursiveeducation.com/static/media/black.4283bfd86d63fc6b59db.png" alt=""/></Navbar.Brand></Link>
               <Navbar.Toggle aria-controls="navbarScroll" />
               <Navbar.Collapse id="navbarScroll">
                   <Nav className="me-auto"/>
                   <Nav className="navbarScroll">
                       <Nav.Link><Link  className="navLink" to="/">Home</Link></Nav.Link>
                       <Nav.Link><Link  className="navLink" to="/about">About</Link></Nav.Link>
                       <Nav.Link><Link  className="navLink" to="/projects">Projects</Link></Nav.Link>
                       <Nav.Link><Link  className="navLink" to="/skills">Skills</Link></Nav.Link>
                       <Nav.Link><Link  className="navLink" to="/resume">Resume</Link></Nav.Link>
                   </Nav>

               </Navbar.Collapse>
           </Navbar>
       </Container>
    );
}

export default Menu;
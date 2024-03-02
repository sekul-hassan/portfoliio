import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

function Menu(props) {
    return (
       <Container fluid="true">
           <Navbar expand={true} className="navBackground px-4">
               <Navbar.Brand href="#"><img className="logoImg" src="https://recursiveeducation.com/static/media/black.4283bfd86d63fc6b59db.png" alt=""/></Navbar.Brand>
               <Navbar.Toggle aria-controls="navbarScroll" />
               <Navbar.Collapse id="navbarScroll">
                   <Nav className="me-auto"/>
                   <Nav navbarScroll>
                       <Nav.Link><Link  className="navLink" to="/">Home</Link></Nav.Link>
                       <Nav.Link><Link  className="navLink" to="/about">About</Link></Nav.Link>
                       <Nav.Link><Link  className="navLink" to="/projects">Projects</Link></Nav.Link>
                       <Nav.Link><Link  className="navLink" to="/skills">Skills</Link></Nav.Link>
                       <Nav.Link><Link  className="navLink" to="/">Resume</Link></Nav.Link>
                   </Nav>

               </Navbar.Collapse>
           </Navbar>
       </Container>
    );
}

export default Menu;
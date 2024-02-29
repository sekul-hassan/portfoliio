import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

function Menu(props) {
    return (
       <Container fluid="true">
           <Navbar expand={true} className="navBackground px-4">
               <Navbar.Brand href="#"><img className="logoImg" src="https://recursiveeducation.com/static/media/black.4283bfd86d63fc6b59db.png" alt=""/></Navbar.Brand>
               <Navbar.Toggle aria-controls="navbarScroll" />
               <Navbar.Collapse id="navbarScroll">
                   <Nav className="me-auto"/>
                   <Nav navbarScroll>
                       <Nav.Link className="navLink" href="#action1">Home</Nav.Link>
                       <Nav.Link className="navLink" href="#action2">About</Nav.Link>
                       <Nav.Link className="navLink" href="#action2">Projects</Nav.Link>
                       <Nav.Link className="navLink" href="#action2">Resume</Nav.Link>
                   </Nav>

               </Navbar.Collapse>
           </Navbar>
       </Container>
    );
}

export default Menu;
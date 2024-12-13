import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../Assets/Images/wightLogo.png";

function Menu(props) {
    const [css, setCss] = useState({
        navBackground: "navBackgroundScroll",
        navbar: "navbarScroll",
        navLink: "navLinkScroll",
    });


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) {
                setCss({
                    navBackground: "navBackgroundScroll",
                    navbar: "navbarScroll",
                    navLink: "navLinkScroll",
                });
            }
            else{
                setCss({
                    navBackground: "navBackground",
                    navbar: "navbar",
                    navLink: "navLink",
                })
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Container fluid="true">
            <Navbar fixed="top" expand="md" className={`${css.navBackground} pr-lg-3`}>
                <Link to="/"><Navbar.Brand><img className="logoImg ml-3" src={logo} alt="recursive education logo" /></Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto" />
                    <Nav className={css.navbar}>
                        <Nav.Link><Link className={css.navLink} to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link className={css.navLink} to="/about">About</Link></Nav.Link>
                        <Nav.Link><Link className={css.navLink} to="/projects">Projects</Link></Nav.Link>
                        <Nav.Link><Link className={css.navLink} to="/skills">Skills</Link></Nav.Link>
                        <Nav.Link><Link className={css.navLink} to="/resume">Resume</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default Menu;

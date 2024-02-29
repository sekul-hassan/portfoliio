import React from 'react';
import {Container} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faLinkedin, faYoutube} from "@fortawesome/free-brands-svg-icons";
function Footer(props) {
    return (
       <Container fluid="true">
          <div className="footerIconDiv">
              <a className="footerLink" href="#abc"><FontAwesomeIcon icon={faLinkedin}/></a>
              <a className="footerLink" href="#abc"><FontAwesomeIcon icon={faGithub}/></a>
              <a className="footerLink" href="#ac"><FontAwesomeIcon icon={faFacebook}/></a>
              <a className="footerLink" href="#abc"><FontAwesomeIcon icon={faYoutube}/></a>
          </div>
           <div className="footerCredit">
               <p>© 2024 <a href="https://recursiveeducation.com" target="_blank" rel="noreferrer"><strong>recursiveeducation.com</strong></a></p>
           </div>
       </Container>
    );
}

export default Footer;

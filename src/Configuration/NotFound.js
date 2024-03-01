import React from 'react';
import {Container} from "react-bootstrap";

function NotFound(props) {
    return (
        <Container fluid="true" className="text-center w-100 h-100 mt-5 mb-5">
            <p className="title mt-5">404</p>
            <h4 className="description mb-5">Project Not Found</h4>
        </Container>
    );
}

export default NotFound;

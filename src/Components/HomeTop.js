import React from 'react';
import {Container, Row} from "react-bootstrap";
import DownloadBtn from "./DownloadBtn";

function HomeTop(props) {

    const callFunction = ()=>{
        window.open('https://www.facebook.com/sekul.hassan', '_blank');
    }

    return (
        <Container fluid="true" className="topBackground">
            <Row className="mx-0 topBackgroundOverlay">
                <div className="content">
                   <DownloadBtn callFunction={callFunction} text="Contact Now"/>
                </div>
            </Row>
        </Container>
    );
}

export default HomeTop;

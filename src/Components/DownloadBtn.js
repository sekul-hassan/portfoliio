import React from 'react';
import {Container} from "react-bootstrap";

function DownloadBtn({callFunction,text}) {
    return (
        <Container fluid="true" className="btnBody mb-3">
            <div className="d-flex justify-content-end">
                <button onClick={callFunction} className="commonBtn">{text}</button>
            </div>
        </Container>
    );
}

export default DownloadBtn;

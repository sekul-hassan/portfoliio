import React from 'react';
import {Button, Container} from "react-bootstrap";

function DownloadBtn({callFunction,text}) {
    return (
        <Container fluid="true" className="btnBody mb-3">
            <div className="d-flex justify-content-end">
                <Button onClick={callFunction} className="btnDownload">{text}</Button>
            </div>
        </Container>
    );
}

export default DownloadBtn;

import React from 'react';
import {Button, Container} from "react-bootstrap";

function DownloadBtn({savePdf}) {
    return (
        <Container fluid="true" className="btnBody mb-3">
            <div className="d-flex justify-content-end">
                <Button onClick={savePdf} className="btnDownload">Download as a pdf</Button>
            </div>
        </Container>
    );
}

export default DownloadBtn;

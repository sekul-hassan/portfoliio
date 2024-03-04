import React, {Fragment} from 'react';
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import ResumeComponent from "../Components/ResumeComponent";
import DownloadBtn from "../Components/DownloadBtn";
import html2pdf from "html2pdf.js/src";

function Resume(props) {
    const savePdf = (e)=>{
        e.preventDefault();
        const element = document.getElementById("resume_component");
        html2pdf(undefined, undefined)
            .from(element)
            .save("ss201001")
    }
    return (
      <Fragment>
          <Menu/>
          <ResumeComponent/>
          <DownloadBtn savePdf={savePdf}/>
          <Footer/>
      </Fragment>
    );
}

export default Resume;


import React, {Fragment} from 'react';
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import ResumeComponent from "../Components/ResumeComponent";
import DownloadBtn from "../Components/DownloadBtn";
import html2pdf from "html2pdf.js/src";
import ProjectTop from "../Components/ProjectTop";

function Resume(props) {
    const savePdf = (e)=>{
        e.preventDefault();
        const element = document.getElementById("resume_component");
        html2pdf(undefined, undefined)
            .from(element)
            .save("ss201001")
    }
    const text = "Explore me with my resume"
    return (
      <Fragment>
          <Menu/>
          <ProjectTop text={text}/>
          <ResumeComponent/>
          <DownloadBtn callFunction={savePdf} text="Download as a pdf"/>
          <Footer/>
      </Fragment>
    );
}

export default Resume;


import React, {Fragment} from 'react';
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import ResumeComponent from "../Components/ResumeComponent";

function Resume(props) {
    return (
      <Fragment>
          <Menu/>
          <ResumeComponent/>
          <Footer/>
      </Fragment>
    );
}

export default Resume;


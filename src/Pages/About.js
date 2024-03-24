import React, {Fragment} from 'react';
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import AboutTop from "../Components/AboutTop";
import abouts from "../Configuration/AboutConfig";
import ProjectTop from "../Components/ProjectTop";

function About(props) {
    const text = "All information about myself"
    return (
        <Fragment>
            <Menu/>
            <ProjectTop text={text}/>
            <AboutTop abouts={abouts}/>
            <Footer/>
        </Fragment>
    );
}

export default About;


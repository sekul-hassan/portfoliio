import React, {Fragment} from 'react';
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import AboutTop from "../Components/AboutTop";
import abouts from "../Configuration/AboutConfig";

function About(props) {
    return (
        <Fragment>
            <Menu/>
            <AboutTop abouts={abouts}/>
            <Footer/>
        </Fragment>
    );
}

export default About;


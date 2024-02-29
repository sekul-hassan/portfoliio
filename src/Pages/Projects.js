import React, {Fragment} from 'react';
import Menu from "../Components/Menu";
import ProjectCard from "../Components/ProjectCard";
import Footer from "../Components/Footer";

function Projects(props) {
    return (
       <Fragment>
           <Menu/>
           <ProjectCard/>
           <Footer/>
       </Fragment>
    );
}

export default Projects;
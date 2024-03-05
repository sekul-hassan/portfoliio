import React, {Fragment} from 'react';
import Menu from "../Components/Menu";
import ProjectCard from "../Components/ProjectCard";
import Footer from "../Components/Footer";
import projectData from "../Configuration/ProjectConfig";

function Projects(props) {
    return (
       <Fragment>
           <Menu/>
           <ProjectCard projectData={projectData}/>
           <Footer/>
       </Fragment>
    );
}

export default Projects;
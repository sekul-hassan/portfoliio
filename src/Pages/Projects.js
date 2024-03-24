import React, {Fragment} from 'react';
import Menu from "../Components/Menu";
import ProjectCard from "../Components/ProjectCard";
import Footer from "../Components/Footer";
import projectData from "../Configuration/ProjectConfig";
import ProjectTop from "../Components/ProjectTop";

function Projects(props) {
    const text = "Explore me with my projects";
    return (
       <Fragment>
           <Menu/>
           <ProjectTop text={text}/>
           <ProjectCard projectData={projectData}/>
           <Footer/>
       </Fragment>
    );
}

export default Projects;
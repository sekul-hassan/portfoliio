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
           <div className="skillBg p-4">
               <h4 className="title text-center">List of Completed Projects</h4>
               <ProjectCard projectData={projectData}/>
           </div>

           <Footer/>
       </Fragment>
    );
}

export default Projects;
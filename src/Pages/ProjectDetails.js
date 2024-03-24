import React, { Fragment } from 'react';
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";
import projectData from "../Configuration/ProjectConfig";
import Details from "../Components/Details";
import NotFound from "../Configuration/NotFound";
import ProjectTop from "../Components/ProjectTop";

function ProjectDetails() {
    const { projectName } = useParams();
    const project = projectData.find(project => project.link === projectName);
    const text = "Explore me with my projects";
    return (
        <Fragment>
            <Menu />
            <ProjectTop text={text}/>
            {
                project ? (
                    <Details project={project}/>
                ):(
                   <NotFound/>
                )
            }
            <Footer />
        </Fragment>
    );
}

export default ProjectDetails;

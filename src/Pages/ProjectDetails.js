import React, { Fragment } from 'react';
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";
import projectData from "../Configuration/ProjectConfig";
import Details from "../Components/Details";
import NotFound from "../Configuration/NotFound";

function ProjectDetails() {
    const { projectName } = useParams();
    const project = projectData.find(project => project.link === projectName);

    return (
        <Fragment>
            <Menu />
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

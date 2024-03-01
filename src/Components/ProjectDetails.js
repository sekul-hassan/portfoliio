// ProjectDetails.js
import React, { Fragment, useEffect } from 'react';
import Menu from "./Menu";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import projectData from "./ProjectConfig";

function ProjectDetails() {
    const { projectName } = useParams(); // Get the projectName from the URL parameter
    useEffect(() => {
        console.log("projectName:", projectName); // Log the projectName parameter
    }, [projectName]);

    const project = projectData.find(project => project.link === projectName); // Find the project based on the link

    return (
        <Fragment>
            <Menu />
            <div>
                {project ? (
                    <div>
                        <h1>{project.title}</h1>
                        <p>{project.description}</p>
                        <p>Project Link: <a href={project.projectLink}>{project.projectLink}</a></p>
                        <p>GitHub Link: <a href={project.gitHubLink}>{project.gitHubLink}</a></p>
                        {/* Render additional project details */}
                    </div>
                ) : (
                    <p>Project not found</p>
                )}
            </div>
            <Footer />
        </Fragment>
    );
}

export default ProjectDetails;

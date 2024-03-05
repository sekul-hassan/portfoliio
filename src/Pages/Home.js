import React, {Fragment} from 'react';
import HomeTop from "../Components/HomeTop";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import projectData from "../Configuration/ProjectConfig";
import ProjectCard from "../Components/ProjectCard";

function Home(props) {
    const firstThreeProjects = projectData.slice(0, 3);
    return (
       <Fragment>
           <Menu/>
           <HomeTop/>
           <ProjectCard projectData={firstThreeProjects}/>
           <Footer/>
       </Fragment>
    );
}

export default Home;

import React, {Fragment} from 'react';
import HomeTop from "../Components/HomeTop";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import projectData from "../Configuration/ProjectConfig";
import ProjectCard from "../Components/ProjectCard";
import {Container} from "react-bootstrap";

function Home(props) {
    const firstThreeProjects = projectData.slice(0, 3);
    return (
       <Fragment>
           <Menu/>
           <HomeTop/>
           <Container fluid="true" className="text-center boldDescription mt-3">
               <h3>Top most Three projects</h3>
           </Container>
           <ProjectCard projectData={firstThreeProjects}/>
           <Footer/>
       </Fragment>
    );
}

export default Home;

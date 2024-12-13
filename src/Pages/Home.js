import React from 'react';
import HomeTop from "../Components/HomeTop";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import projectData from "../Configuration/ProjectConfig";
import ProjectCard from "../Components/ProjectCard";
import { Container} from "react-bootstrap";
import AboutMeFront from "../Components/AboutMeFront";
import Counting from "../Components/Counting";

function Home(props) {
    const firstThreeProjects = projectData.slice(0, 5);
    return (
        <div className="minHeight">
            <Menu/>
            <HomeTop/>
            <AboutMeFront/>
            <Counting/>
            <Container fluid="true" className="boldDescription mt-3">
                <h3 className="title text-center">Top most Five projects</h3>
                <ProjectCard projectData={firstThreeProjects}/>
            </Container>
            <Footer/>
        </div>
    );
}

export default Home;

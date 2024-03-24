import React, {Fragment} from 'react';
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import Skills from "../Components/Skills";
import skills from "../Configuration/SkillConfig";
import ProjectTop from "../Components/ProjectTop";

function Skill(props) {
    const text = "Explore me with my skills.";
    return (
       <Fragment>
           <Menu/>
           <ProjectTop text={text}/>
           <Skills skills={skills}/>
           <Footer/>
       </Fragment>
    );
}

export default Skill;

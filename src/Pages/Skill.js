import React, {Fragment} from 'react';
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import Skills from "../Components/Skills";
import skills from "../Configuration/SkillConfig";

function Skill(props) {
    return (
       <Fragment>
           <Menu/>
           <Skills skills={skills}/>
           <Footer/>
       </Fragment>
    );
}

export default Skill;

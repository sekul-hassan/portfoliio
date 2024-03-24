import React, {Fragment} from 'react';
import {Container} from "react-bootstrap";

function Skills({skills}) {
    return (
        <Container fluid="true" className=" px-5 py-4 skillBg">
            {
                skills && skills.map((skill,idx)=>(
                    <Fragment key={idx}>
                        <p className="description"><span className="boldDescription">{skill.title} : </span> {skill.description}</p>
                    </Fragment>
                ))
            }
        </Container>
    );
}

export default Skills;

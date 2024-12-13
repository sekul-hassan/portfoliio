import React, {Fragment} from 'react';
import {Container} from "react-bootstrap";

function Skills({skills}) {
    return (
        <Container fluid="true" className="p-4 skillBg">
            <h4 className="title text-center mt-2 mb-4">Skills</h4>
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

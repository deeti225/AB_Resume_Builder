import React from 'react';
import { Container } from '@mui/system';
import "../Styles/TemplateSkillsComponent.css";



const TemplateSkillsComp = (props) => {
    return (
        <Container>
            <li className="skill">
                {props.skill}
            </li>
        </Container>
    )
}
export default TemplateSkillsComp;
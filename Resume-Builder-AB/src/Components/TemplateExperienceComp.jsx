import { Container } from "@mui/system";
import React from 'react';
import "../Styles/TemplateExperienceComp.css";

const TemplateExperienceComp = (props) => {
    return (
        <Container className="templateExperienceComp">
            <li className="templateExperienceComp">
                <h3 className="experience-heading">
                    {props.experiences.jobTitle}{" "}
                    <span className="org-name">
                        {props.experiences.organizationName}
                    </span>
                    <span className="experience-start-end">
                        ({props.experiences.startYear} - {props.experiences.endYear})
                    </span>
                </h3>
            </li>
        </Container>
    )
}

export default TemplateExperienceComp;

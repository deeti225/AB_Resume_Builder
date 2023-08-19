import { Container, Paper } from "@mui/material";
import React from 'react';
import "../Styles/Template1.css";
import TemplateHeader from "../Components/TemplateHeader";
import TemplateHeading from "../Components/TemplateHeading";
import TemplateExperienceComp from "../Components/TemplateExperienceComp";
import { data } from "../Data/data";
import TemplateEducationComp from "../Components/TemplateEducationComp";
import TemplateSkillsComp from "../Components/TemplateSkillsComp";




export default function Template1(props) {


    //Assigning the Values
    const personalInfo = props.personalInfo ? props.personalInfo : data.personal_info;

    const skills = props.skills ? props.skills : data.key_skills;

    const educationInfo = props.educationInfo ? props.educationInfo : data.education_details;

    const experiences = props.experiences ? props.experiences : data.work_experience;




    return (
        <>

            <Paper
                sx={{
                    height: {
                        xs: "500px",
                        sm: "550px",
                        md: "600px",
                        lg: "650px",
                        xl: "700px",
                    },
                    width: {
                        xs: "350px",
                        sm: "400px",
                        md: "450px",
                        lg: "500px",
                        xl: "550px",
                    },

                }}
                elevation={3}
                id={`${props.index}report`}>
                <TemplateHeader
                    primaryColor={"#C98A55"}
                    secondaryColor={"black"}
                    bgColor={"white"}
                    personalInfo={personalInfo}
                    workExperience={experiences} />

                <Container>
                    <TemplateHeading color={"#C98A55"} title={"Professional Experience"} />
                    <ul style={{ paddingBottom: 10 }}>
                        {experiences.map((exp, index) => {
                            return (
                                <TemplateExperienceComp
                                    key={index}
                                    experiences={exp} />
                            )
                        })}
                    </ul>

                    <TemplateHeading color={"#C98A55"} title={"Education"} />
                    <TemplateEducationComp education={educationInfo} />
                    <TemplateHeading color={"#C98A55"} title={"Key Skills"} />


                    <ul style={{ marginBottom: 10 }}>
                        {skills.map((skill, index) => {
                            return <TemplateSkillsComp key={index} skill={skill} />;
                        })}
                    </ul>
                </Container>


            </Paper>
        </>
    )
}

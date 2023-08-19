import React, { useEffect, useState } from "react";
import Navbar from "../Components/NavBar/NavBar";
import FootBar from "../Components/NavBar/FootBar";
import "../Styles/MyResumes.css";
import { Button } from "@mui/material";
import DarkEffect from "../Components/DarkEffect";
import { templates } from "../Data/templates";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import JsPDF from "jspdf";
import { connect } from "react-redux";
import {
    ADDEXPERIENCEALL,
    ADDEDUCATION,
    ADDPERSONALINFO,
    EDITSKILL,
    SELECTRESUME,
    SELECTTEMPLATE,
} from "../Redux/Actions";
import { useNavigate } from "react-router-dom";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    padding: theme.spacing(1),

}));


//For mapping state with props.
const mapStateToProps = (state) => ({
    selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
});

const mapDispatchToProps = (dispatch) => ({
    setSelectedTemplateId: (id) => dispatch(SELECTTEMPLATE(id)),
    setSelectedResumeId: (id) => dispatch(SELECTRESUME(id)),
    onADDPERSONALINFO: (details) => dispatch(ADDPERSONALINFO(details)),
    setADDEXPERIENCEALL: (experiences) => dispatch(ADDEXPERIENCEALL(experiences)),
    onADDEDUCATION: (details) => dispatch(ADDEDUCATION(details)),
    onEDITSKILL: (skills) => dispatch(EDITSKILL(skills)),
});





const MyResumes = (props) => {
    const [resumes, setResumes] = useState([]);


    //checking for available resumes in localStorage
    useEffect(() => {
        const newResumes = window.localStorage.getItem("resumes")
            ? JSON.parse(window.localStorage.getItem("resumes"))
            : [];

        setResumes(newResumes);
    }, []);

    const navigate = useNavigate();

    const getTemplate = (resume, index) => {
        let template = templates.find(
            (eachTemplate) => eachTemplate.id === resume.template_id
        );



        const TemplateComp = React.cloneElement(template.template, {
            personalInfo: resume.personalInfo,
            experiences: resume.experiences,
            educationInfo: resume.educationInfo,
            skills: resume.skills,
            key: resume.id,
            index: index,
        });

        return TemplateComp;
    };





    // For deleteing the resume
    const deleteResume = (resume) => {
        let resumes = window.localStorage.getItem("resumes");

        let newResumes = JSON.parse(resumes);
        const newSetOfResumes = newResumes.filter((eachResume) => {
            return eachResume.id !== resume.id;
        });

        window.localStorage.setItem("resumes", JSON.stringify(newSetOfResumes));
        setResumes(newSetOfResumes);
    };





    // For Downloading the Resume
    const downloadResume = (id) => {
        // console.log(id);
        const report = new JsPDF("p", "pt", "a4");
        report.html(document.getElementById(`${id}report`)).then(() => {
            report.save(`resume.pdf`);

        });
    };





    const setUserData = (resume) => {

        //for setting personal info

        props.onADDPERSONALINFO(resume.personalInfo);

        //for setting work experience

        props.setADDEXPERIENCEALL(resume.experiences);

        //for setting education information

        props.onADDEDUCATION(resume.educationInfo);

        //for setting skills

        props.onEDITSKILL(resume.skills);
    };



    const navigateToFillDetails = (resume) => {
        props.setSelectedTemplateId(resume.template_id);
        props.setSelectedResumeId(resume.id);
        setUserData(resume);
        navigate("/template/FillDetails")
    };



    return (
        <>
            <Navbar active={"My Resumes"} />
            <h3 className="title">YOUR RESUMES</h3>
            <div className="my-resumes">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        className="grid">
                        {resumes.length >= 1 ? (
                            resumes.map((resume, index) => {
                                return (
                                    <Grid
                                        item
                                        className={`resume `}
                                        id={`${index}resume`}
                                        margin={2}
                                        key={index}>
                                        <Item
                                            className="itemBox"
                                            id={`${index}ITEM`
                                            } >
                                            {getTemplate(resume, index)}
                                            < DarkEffect />
                                            <div className="use-template-btn-cont">

                                                <Button

                                                    className="use-template-btn"
                                                    onClick={() => {
                                                        downloadResume(index);
                                                    }}
                                                    size="medium"
                                                    variant="contained">
                                                    Download
                                                </Button>
                                                <Button
                                                    className="use-template-btn"
                                                    onClick={() => {
                                                        deleteResume(resume);
                                                    }}
                                                    size="medium"
                                                    variant="contained">
                                                    Delete
                                                </Button>
                                                <Button
                                                    className="use-template-btn"
                                                    onClick={() => navigateToFillDetails(resume)}
                                                    size="medium"
                                                    variant="contained">
                                                    Edit Template
                                                </Button>
                                            </div>
                                        </Item>
                                    </Grid>
                                );
                            })
                        ) : (
                            <div className="no-resumes-container">
                                <SentimentVeryDissatisfiedIcon fontSize="medium" />
                                <p className="no-resumes-text">
                                    Empty
                                </p>
                            </div>
                        )}
                    </Grid>
                </Box>
            </div>
            <FootBar />
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(MyResumes);

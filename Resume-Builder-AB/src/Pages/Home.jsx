import React from 'react';
import NavBar from "../Components/NavBar/NavBar";
import { templates } from "../Data/templates";
import { SELECTTEMPLATE } from "../Redux/Actions";
import DarkEffect from "../Components/DarkEffect";
import { useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import { Button, Stack } from "@mui/material";
import "../Styles/Home.css";
import FootBar from '../Components/NavBar/FootBar';







//for mapping state with props
const mapStateToProps = (state) => ({
    selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId
});


const mapDispatchToProps = (dispatch) => ({
    setSelectedTemplateId: (id) => dispatch(SELECTTEMPLATE(id))

});






const Home = (props) => {
    const navigate = useNavigate();
    const navigateToFill = (id) => {
        props.setSelectedTemplateId(id);
        navigate("/template/FillDetails")
    }
    return (
        <>
            <NavBar active={"Resume Templates"} />
            <>
                <div className="Home">
                    <div className="home-templates-cont">

                    <h1 class="text-4xl leading-normal md:text-7xl font-header text-gray-900 mb-1 text-center">Create a professional resume</h1>
                    <p class="max-w-xl text-lg md:text-xl text-gray-500 text-center mt-2 mb-9 tracking-wide">Fill in the blanks, choose a template, and download your resume instantly.</p>
                        <h3 className="template-header-title">TEMPLATES</h3>
                        <p className="template-select-text">Select a template to get started</p>

                        <Stack
                            sx={{
                                width: "100%",
                                display: "grid",
                                gridTemplateColumns: {
                                    sm: "1fr 1fr ",
                                    md: "1fr 1fr ",
                                    lg: "1fr 1fr 1fr",
                                    xl: "1fr 1fr 1fr 1fr",
                                },
                                gridGap: "30px",
                            }}>

                            {/* Adding templates with their id and images */}
                            {templates.map((template) => {
                                return (
                                    <div key={template.id} id="template" className="templates-img-cont">
                                        <img
                                            className="template-img"
                                            src={template.template_img}
                                            alt={template.template_name}
                                            
                                        />

                                        {/* darkeffect to make background darker on hover on any template */}
                                        <DarkEffect />
                                        <Button
                                            className="use-template-btn"
                                            onClick={() => navigateToFill(template.id)}
                                            size="medium"
                                            variant="contained">
                                            Use  Template
                                        </Button>
                                    </div>
                                );
                            })}
                        </Stack>
                    </div>
                </div>
            </>
            <FootBar />
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
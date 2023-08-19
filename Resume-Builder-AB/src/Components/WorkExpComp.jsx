import "../Styles/WorkExpComp.css";
import { Button, Divider, MenuItem, Paper, Select } from "@mui/material";
import React, { useState } from "react";
import { connect } from "react-redux";
import BackNextBtnComp from "./BackNextBtnComp";
import { ADDEXPERIENCE, ADDEXPERIENCEALL } from "../Redux/Actions";
import { useForm, Controller } from "react-hook-form";
import InputComponent from "./InputComp";
import SelectComponent from "./SelectComp";







const mapStateToProps = (state) => ({
    experiences: state.workExpReducer.experiences,
});




const mapDispatchToProps = (dispatch) => ({
    setADDEXPERIENCE: (experience) => dispatch(ADDEXPERIENCE(experience)),
    setADDEXPERIENCEALL: (experiences) => dispatch(ADDEXPERIENCEALL(experiences)),
});




const Years = [
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
    "2014",

];




const WorkExperienceComponent = (props) => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const [loading, setLoading] = useState(false);


    // Back Click Function
    const handleBack = () => {
        props.setTab(props.tab - 1);
    };



    // Next Click Function
    const handleNext = (data) => {
        // console.log(data);
        setLoading(true);

        let experienceOne = {};
        let experienceTwo = {};

        for (let index in data) {
            if (index.includes("1")) {
                experienceOne[index.slice(0, index.length - 1)] = data[index];
            } else {
                experienceTwo[index.slice(0, index.length - 1)] = data[index];
            }
        }


        if (Object.keys(experienceTwo).length) {
            props.setADDEXPERIENCEALL([
                { ...experienceOne, id: 1 },
                { ...experienceTwo, id: 2 },
            ]);
        } else {
            props.setADDEXPERIENCEALL([{ ...experienceOne, id: 1 }]);
        }


        setTimeout(() => {
            setLoading(false);
            props.setTab(props.tab + 1);
        }, 1000);
    };



    //  For adding new Experience
    const addNewExperience = () => {
        props.setADDEXPERIENCE({
            id: props.experiences.length + 1,
            jobTitle: "",
            organizationName: "",
            startYear: "",
            endYear: "",
        });
    };



    // For adding Job Title
    const editJobTitleExperience = (value, id) => {
        const newExperiences = props.experiences.map((experience) => {
            if (experience.id === id) {
                return { ...experience, jobTitle: value };
            } else return experience;
        });

        props.setADDEXPERIENCEALL(newExperiences);
    };




    //  For Editing the Organizaton Name
    const editOrganisationNameExperience = (value, id) => {
        const newExperiences = props.experiences.map((experience) => {
            if (experience.id === id) {
                return { ...experience, organizationName: value };
            } else return experience;
        });
        props.setADDEXPERIENCEALL(newExperiences);

    };

    return (
        <Paper className="work-experience-paper" elevation={3}>
            <h2 className="workExperienceHeading">Work Experience</h2>
            <form onSubmit={handleSubmit(handleNext)}>
                {props.experiences.map((experience) => {
                    return (
                        <div key={experience.id} className="experience-cont">
                            <h3 className="experience-heading">Experience {experience.id}</h3>
                            <Divider sx={{ margin: "5px 0px" }} />
                            <div className="experience-form-cont">
                                <InputComponent
                                    title={"Job Title"}
                                    type={"text"}
                                    name={"jobTitle" + experience.id}
                                    register={register}
                                    multiline={false}
                                    value={experience.jobTitle}
                                    setValue={(value) =>
                                        editJobTitleExperience(value, experience.id)
                                    }
                                    error={Boolean(errors[`jobTitle${experience.id}`])}
                                    errorMessage={
                                        errors[`jobTitle${experience.id}`]
                                            ? errors[`jobTitle${experience.id}`].message
                                            : null
                                    }
                                />
                                <InputComponent
                                    title={"Org Name"}
                                    type={"text"}
                                    name={"organizationName" + experience.id}
                                    register={register}
                                    multiline={false}
                                    value={experience.organizationName}
                                    setValue={(value) =>
                                        editOrganisationNameExperience(value, experience.id)
                                    }
                                    error={
                                        errors[`organizationName${experience.id}`] ? true : false
                                    }
                                    errorMessage={
                                        errors[`organizationName${experience.id}`]
                                            ? errors[`organizationName${experience.id}`].message
                                            : null
                                    }
                                />
                                <SelectComponent
                                    title={"Start Year"}
                                    errorMessage={
                                        errors[`startYear${experience.id}`]
                                            ? errors[`startYear${experience.id}`].message
                                            : null
                                    }
                                    error={errors[`startYear${experience.id}`] ? true : false}>
                                    <Controller
                                        render={(props) => {
                                            return (
                                                <Select
                                                    value={props.field.value}
                                                    onChange={props.field.onChange}
                                                    error={
                                                        errors
                                                            ? errors[`startYear${experience.id}`]
                                                                ? true
                                                                : false
                                                            : false
                                                    }>
                                                    {Years.map((year, index) => {
                                                        return (
                                                            <MenuItem key={index} value={year}>
                                                                {year}
                                                            </MenuItem>
                                                        );
                                                    })}
                                                </Select>
                                            );
                                        }}
                                        name={`startYear${experience.id}`}
                                        control={control}
                                        rules={{ required: "*Please select start year" }}
                                        defaultValue={experience.startYear}
                                    />
                                </SelectComponent>
                                <SelectComponent
                                    title={"End Year"}
                                    errorMessage={
                                        errors[`endYear${experience.id}`]
                                            ? errors[`endYear${experience.id}`].message
                                            : null
                                    }
                                    error={errors[`endYear${experience.id}`] ? true : false}>
                                    <Controller
                                        render={(props) => (
                                            <Select
                                                value={props.field.value}
                                                onChange={props.field.onChange}
                                                error={
                                                    errors
                                                        ? errors[`endYear${experience.id}`]
                                                            ? true
                                                            : false
                                                        : false
                                                }>
                                                {Years.map((year, index) => {
                                                    return (
                                                        <MenuItem key={index} value={year}>
                                                            {year}
                                                        </MenuItem>
                                                    );
                                                })}
                                            </Select>
                                        )}
                                        name={"endYear" + experience.id}
                                        control={control}
                                        rules={{ required: "*Please select end year" }}
                                        defaultValue={experience.endYear}
                                    />
                                </SelectComponent>
                            </div>
                        </div>
                    );
                })}
                {props.experiences.length === 2 ? null : (
                    <div className="add-new-btn-cont">
                        <Button onClick={addNewExperience} variant="text">
                            Add New
                        </Button>
                    </div>
                )}
                <Divider sx={{ margin: "10px 0px" }} />
                <BackNextBtnComp
                    onNext={handleNext}
                    onBack={handleBack}
                    loading={loading}
                    tab={props.tab}
                    nextTitle={"Next"}
                    backTitle={"Back"}
                />
            </form>
        </Paper>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkExperienceComponent);
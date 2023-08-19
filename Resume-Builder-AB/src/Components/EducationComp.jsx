import React, { useState } from 'react';
import { Divider, MenuItem, Paper, Select } from "@mui/material";
import { connect } from "react-redux";
import { ADDEDUCATION } from "../Redux/Actions";
import { useForm, Controller } from "react-hook-form";
import "../Styles/EducationComp.css";
import BackNextBtnComp from "./BackNextBtnComp";
import InputComp from './InputComp';
import SelectComp from "./SelectComp";






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


const mapStateToProp = (state) => ({
    educationInfo: state.EducationInfo.educationInfo,
})



const mapDispatchToProps = (dispatch) => ({
    onAddEducation: (details) => dispatch(ADDEDUCATION(details))
})



const EducationComp = (props) => {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();




    const handleNext = (data) => {
        setLoading(true);
        props.onAddEducation(data);

        setTimeout(() => {
            setLoading(false);
            props.setTab(props.tab + 1);
        }, 1000);
    }


    const handleBack = () => {
        props.setTab(props.tab - 1);
    }



    return (
        <Paper className="EducationPaper" elevation={3}>
            <h2 className="education-heading">Education Details</h2>
            <Divider sx={{ margin: "10px 0px" }} />
            <form onSubmit={handleSubmit(handleNext)}>
                <div className="education-form">
                    <InputComp title={"Domain"}
                        type={"text"}
                        name={"domain"}
                        register={register}
                        multiline={false}
                        value={props.educationInfo.domain}
                        setValue={(value) =>
                            props.onAddEducation({ ...props.educationInfo, domain: value })}
                        error={errors.domain ? true : false}
                        errorMessage={errors.domain ? errors.domain.message : null}
                    />
                    <div></div>
                    <InputComp
                        title={"University"}
                        type={"text"}
                        name={"university"}
                        register={register}
                        multiline={false}
                        value={props.educationInfo.university}
                        setValue={(value) =>
                            props.onAddEducation({
                                ...props.educationInfo,
                                university: value,
                            })
                        }
                        error={errors.university ? true : false}
                        errorMessage={errors.university ? errors.university.message : null}
                    />


                    <InputComp
                        title={"Degree"}
                        type={"text"}
                        name={"degree"}
                        register={register}
                        multiline={false}
                        value={props.educationInfo.degree}
                        setValue={(value) =>
                            props.onAddEducation({ ...props.educationInfo, degree: value })
                        }
                        error={errors.degree ? true : false}
                        errorMessage={errors.degree ? errors.degree.message : null}
                    />


                    <SelectComp
                        title={"Start Year"}
                        errorMessage={errors.startYear ? errors.startYear.message : null}
                        error={errors.startYear ? true : false}>
                        <Controller
                            render={(props) => {
                                return (
                                    <Select
                                        value={props.field.value}
                                        onChange={props.field.onChange}
                                        error={errors.startYear ? true : false}>
                                        {Years.map((Year, index) => {
                                            return (
                                                <MenuItem key={index} value={Year}>
                                                    {Year}
                                                </MenuItem>
                                            );
                                        })}
                                    </Select>
                                );
                            }}
                            name={"startYear"}
                            control={control}
                            rules={{ required: "*Please Select Start Year" }}
                            defaultValue={props.educationInfo.startYear}
                        />
                    </SelectComp>


                    <SelectComp
                        title={"End Year"}
                        errorMessage={errors.endYear ? errors.endYear.message : null}
                        error={errors.endYear ? true : false}>
                        <Controller
                            render={(props) => (
                                <Select
                                    value={props.field.value}
                                    onChange={props.field.onChange}
                                    error={errors.endYear ? true : false}>
                                    {Years.map((Year, index) => {
                                        return (
                                            <MenuItem key={index} value={Year}>
                                                {Year}
                                            </MenuItem>
                                        );
                                    })}
                                </Select>
                            )}
                            name={"endYear"}
                            control={control}
                            rules={{ required: "*Please Select End Year" }}
                            defaultValue={props.educationInfo.endYear}
                        />
                    </SelectComp>
                </div>
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
    )
}



export default connect(mapStateToProp, mapDispatchToProps)(EducationComp)
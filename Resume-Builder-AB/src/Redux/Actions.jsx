import * as ActionTypes from "./ActionTypes"

export let SELECTTEMPLATE = (id) => ({
    type: ActionTypes.SelectTemplate,
    payload: id,
});


export let SELECTRESUME = (id) => ({
    type: ActionTypes.SelectResume,
    payload: id
});


export let ADDEDUCATION = (details) => ({
    type: ActionTypes.AddEducation,
    payload: details
});


export let ADDEXPERIENCEALL = (experiences) => ({
    type: ActionTypes.AddExperienceAll,
    payload: experiences
});


export let ADDEXPERIENCE = (experience) => ({
    type: ActionTypes.AddExperience,
    payload: experience
});



export let EDITSKILL = (skills) => ({
    type: ActionTypes.EditSkill,
    payload: skills
});



export let DELETESKILL = (id) => ({
    type: ActionTypes.DeleteSkill,
    payload: id
});



export let ADDPERSONALINFO = (details) => ({
    type: ActionTypes.AddPersonalInfo,
    payload: details
});



export let ADDNEWSKILLS = () => ({
    type: ActionTypes.AddNewSkills,
    payload: null
});

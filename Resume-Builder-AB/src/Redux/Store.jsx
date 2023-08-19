import { createStore, combineReducers } from "redux"
import {
    selectedTemplateReducer,
    EducationInfo, workExpReducer,
    personalInfoReducer,
    SkillReducer,
} from "./Reducers"






export const store = createStore(
    combineReducers({
        selectedTemplateReducer,
        EducationInfo, workExpReducer,
        personalInfoReducer,
        SkillReducer,

    }), {}
)
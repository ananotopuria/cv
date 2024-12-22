import { combineReducers } from "@reduxjs/toolkit";
import skillsReducer from "../features/skillSlice";
import educationReducer from "../features/educationSlice";

const rootReducer = combineReducers({
    skills: skillsReducer,
    education: educationReducer,
});
export default rootReducer;
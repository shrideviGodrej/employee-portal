import { combineReducers } from "redux";
import employeeReducer from "./action-reducer";


const rootReducer=combineReducers({
    employeestate:employeeReducer
})

export default rootReducer
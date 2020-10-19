import {combineReducers} from "redux"
import eduReducer from "./eduReducer"
import errorReducer from "./errorReducer"
import infoReducer from "./infoReducer"
import projectReducer from "./projectReducer"
import workReducer from "./workReducer"


export default combineReducers ({
    errors:errorReducer,
    info: infoReducer,
    education: eduReducer,
    work: workReducer,
    project: projectReducer
})
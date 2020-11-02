import axios from "axios"
import { GET_ERRORS, GET_SKILLS } from "./types";

export const createSkill = (skill, history) => async dispatch => {
    try {
        const res = await axios.post("/api/skills", skill )
        history.push("/dashboard");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
    } catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload: error.response.data
        })
        
    }
}

export const getSkills = () => async dispatch => {
    const res = await axios.get(`/api/skills/all`)
    dispatch({
        type: GET_SKILLS,
        payload: res.data
    })
}
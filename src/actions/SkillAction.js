import axios from "axios"
import { GET_ERRORS, GET_SKILLS } from "./types";

export const createSkill = (skills, history) => async dispatch => {
    try {
        const res = await axios.post("http://portfolioawswebsite-env.eba-cj2sjia3.us-east-2.elasticbeanstalk.com/api/skills", skills )
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
    const res = await axios.get(`http://portfolioawswebsite-env.eba-cj2sjia3.us-east-2.elasticbeanstalk.com/api/skills/all`)
    dispatch({
        type: GET_SKILLS,
        payload: res.data
    })
}
import { DELETE_SKILL, GET_SKILLS } from "../actions/types";


const initialState = {
    skills: [],
    skill: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_SKILLS:
            return{
                ...state,
                skills: action.payload
            };
        case DELETE_SKILL:
            return{
                ...state,
                skills: state.skills.filter(skill => skill.skillname !== action.payload)
            }
            default:
                return state;
    }
}
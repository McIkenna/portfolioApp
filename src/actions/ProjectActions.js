import axios from "axios"
import { DELETE_PROJECT, GET_ERRORS, GET_PROJECT, GET_PROJECTS, UPLOAD_TASK, GET_TASKS } from "./types";

export const createProject = (project, history) => async dispatch => {
    try {
        const res = await axios.post("http://portfolioawswebsite-env.eba-cj2sjia3.us-east-2.elasticbeanstalk.com/api/project", project)
        history.push("/dashboard");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
        
    }
}

export const getProjects = () => async dispatch => {
    const res = await axios.get("http://portfolioawswebsite-env.eba-cj2sjia3.us-east-2.elasticbeanstalk.com/api/project/all")
    dispatch({
        type: GET_PROJECTS,
        payload: res.data
    })
}

export const deleteProject = id => async dispatch => {
    if(window.confirm("This will delete Permanent")){
        await axios.delete(`http://portfolioawswebsite-env.eba-cj2sjia3.us-east-2.elasticbeanstalk.com/api/project/${id}`)
        dispatch({
            type: DELETE_PROJECT,
            payload: id
        })
    }
}

export const getStoredProject = (id, history) => async dispatch => {
    try {
        const res = await axios.get(`http://portfolioawswebsite-env.eba-cj2sjia3.us-east-2.elasticbeanstalk.com/api/project/${id}`)
        dispatch({
            type: GET_PROJECT,
            payload: res.data
        })
    } catch (error) {
        history.push("/dashboard");
        
    }
}

export const uploadTask = (task, history) => async dispatch => {
    try{
        const res = await axios.post("http://portfolioawswebsite-env.eba-cj2sjia3.us-east-2.elasticbeanstalk.com/api/file/uploadFile", task)
        history.push("/dashboard");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })

    }catch(error){
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}

export const getStoredTasks = () => async dispatch =>{
        const res = await axios.get("http://portfolioawswebsite-env.eba-cj2sjia3.us-east-2.elasticbeanstalk.com/api/file/uploads/all")
    dispatch({
        type: GET_TASKS,
        payload: res.data
    })
}
import axios from "axios"
import {DELETE_WORK, GET_ERRORS, GET_WORK, GET_WORKS } from "./types"


export const createWork = (work, history) => async dispatch => {
    try {
        const res = await axios.post("/api/work", work)
        history.push("/dashboard")
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

export const getWorks = () => async dispatch => {
    const res = await axios.get("/api/work/all")
    dispatch({
        type: GET_WORKS,
        payload: res.data
    })
}

export const getStoredWork = (id, history) => async dispatch => {
    try {
        const res = await axios.get(`/api/work/${id}`)
        dispatch({
            type: GET_WORK,
            payload: res.data
        })
    } catch (err) {
        history.push("/dashboard");
        
    }
}

export const deleteWork = id => async dispatch => {
    if(window.confirm("this will delete Work Experience Permanent"))
    {
        await axios.delete(`/api/work/${id}`)
    }
    dispatch({
        type: DELETE_WORK,
        payload: id
    })
}
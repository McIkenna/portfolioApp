import axios from "axios"
import { DELETE_EDU, GET_EDUCATION, GET_EDUS, GET_ERRORS } from "./types"

export const createEducation = (education, history) => async dispatch => {
    try {
        await axios.post(`http://localhost:8080/api/education`, education)
        history.push("/")
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

export const getAllEducation = () => async dispatch => {
    const res = await axios.get(`http://localhost:8080/api/education/all`)
    dispatch({
        type: GET_EDUS,
        payload: res.data
    })
}

export const getStoredEdu = (eduId, history) => async dispatch => {
    try {
     const res = await axios.get(`http://localhost:8080/api/education/${eduId}`)
     dispatch({
         type: GET_EDUCATION,
         payload: res.data,
     })
    } catch (error) {
        history.push("/");
    }
 };
 
 export const deleteEdu = id => async dispatch => {
    if(window.confirm("This will delete data Permanent"))
    {
        await axios.delete(`http://localhost:8080/api/education/${id}`)
    dispatch({
        type: DELETE_EDU,
        payload: id
    })
    }
        
};

export const updateEducation = (education, history) => async dispatch => {
    try {
        await axios.post(`http://localhost:8080/api/education`, education)
        history.push("/")
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
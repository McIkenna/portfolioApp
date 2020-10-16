import axios from "axios"
import {GET_ERRORS} from "./types";

export const createInfo = (info, history) => async dispatch => {
    try {
        const res = await axios.post("http://localhost:8080/api/info", info)
        history.push("/dashboard")
    } catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload: error.response.data
        })
    }
}
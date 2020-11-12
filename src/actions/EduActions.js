import axios from "axios"
import { GET_EDUCATION, GET_EDUS, GET_ERRORS } from "./types"

export const createEducation = (education, history) => async dispatch => {
    try {
        const res = await axios.post("http://portfolioawswebsite-env.eba-cj2sjia3.us-east-2.elasticbeanstalk.com/api/education", education)
        history.push("/dashboard")
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
    const res = await axios.get("http://portfolioawswebsite-env.eba-cj2sjia3.us-east-2.elasticbeanstalk.com/api/education/all")
    dispatch({
        type: GET_EDUS,
        payload: res.data
    })
}
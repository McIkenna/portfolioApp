import axios from "axios"
import {GET_ERRORS, GET_INFO, GET_STOREDINFO, DELETE_INFO} from "./types";

export const createInfo = (info, history) => async dispatch => {
    try {
        const res = await axios.post("http://portfolioawswebsite-env.eba-cj2sjia3.us-east-2.elasticbeanstalk.com/api/info", info)
        history.push("/dashboard");
        dispatch({
            type:GET_ERRORS,
            payload: {}
        })
    } catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload: error.response.data
        })
    }
}


export const getInfo = () => async dispatch => {
  const res = await axios.get(`http://portfolioawswebsite-env.eba-cj2sjia3.us-east-2.elasticbeanstalk.com/api/info/all`)

        dispatch({
            type: GET_INFO,
            payload: res.data,
    
     } )   
    
};

export const getStoredInfo = (id, history) => async dispatch => {
   try {
    const res = await axios.get(`http://portfolioawswebsite-env.eba-cj2sjia3.us-east-2.elasticbeanstalk.com/api/info/${id}`)
    dispatch({
        type: GET_STOREDINFO,
        payload: res.data,
    })
   } catch (error) {
       history.push("/dashboard");
   }
};

export const deleteInfo = id => async dispatch => {
    if(window.confirm("This will delete data Permanent"))
    {
        await axios.delete(`http://portfolioawswebsite-env.eba-cj2sjia3.us-east-2.elasticbeanstalk.com/api/info/${id}`)
    dispatch({
        type: DELETE_INFO,
        payload: id
    })
    }
        
};






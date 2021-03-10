import axios from "axios"
import {GET_ERRORS, GET_INFO, GET_STOREDINFO, DELETE_INFO} from "./types";

export const createInfo = (info, history) => async dispatch => {
    try {
       await axios.post(`http://Portfolio-complete-cloud-env.eba-y7qj96hg.us-east-2.elasticbeanstalk.com/admin/info`, info)
        history.push(`/`);
        dispatch({
            type:GET_ERRORS,
            payload: {}
        })
    } catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload: error.response.data
        })
        console.log(error)
    }
}


export const getInfo = () => async dispatch => {
  const res = await axios.get(`http://Portfolio-complete-cloud-env.eba-y7qj96hg.us-east-2.elasticbeanstalk.com/api/info/all`)

        dispatch({
            type: GET_INFO,
            payload: res.data
    
     } )   
    
};

export const getStoredInfo = (infoId, history) => async dispatch => {
   try {
    const res = await axios.get(`http://Portfolio-complete-cloud-env.eba-y7qj96hg.us-east-2.elasticbeanstalk.com/api/info/${infoId}`)
    dispatch({
        type: GET_STOREDINFO,
        payload: res.data,
    })
   } catch (error) {
       history.push("/");
   }
};

export const deleteInfo = id => async dispatch => {
    if(window.confirm("This will delete data Permanent"))
    {
        await axios.delete(`http://Portfolio-complete-cloud-env.eba-y7qj96hg.us-east-2.elasticbeanstalk.com/admin/info/${id}`)
    dispatch({
        type: DELETE_INFO,
        payload: id
    })
    }
        
};

export const updatePrevInfo = (info, history) => async dispatch => {
    try {
        await axios.put(`http://Portfolio-complete-cloud-env.eba-y7qj96hg.us-east-2.elasticbeanstalk.com/admin/info`, info)
        history.push("/");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
};





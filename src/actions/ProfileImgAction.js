import axios from "axios";
import {UPLOAD_PROFILEIMG} from "./types"


export const uploadImage = (imageData) => async dispatch => {
    if(imageData.entries().next().value[1] !== null){
        const response = await axios.post(`http://portfolioawswebsite-env.eba-cj2sjia3.us-east-2.elasticbeanstalk.com/uploadFiles`, imageData, {
            onUploadProgress: ProgressEvent => {
                console.log("Uploading : " + ((ProgressEvent.loaded / ProgressEvent.total)*100).toString() + "%")
            }
        });
        dispatch({
            type: UPLOAD_PROFILEIMG,
            payload: response.data
        })
    }
}
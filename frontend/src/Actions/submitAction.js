import axios from "axios";
import { submitFail, submitRequest, submitSuccess } from "../Slices/submitSlice";

export const submitTask = (dat) => async (dispatch) => {
    try {
        dispatch(submitRequest());
        const { data } = await axios.post('/crud/task/createTask',dat);
        dispatch(submitSuccess(data));
    } catch (error) {
        dispatch(submitFail(error.response.data.message));
    }
};
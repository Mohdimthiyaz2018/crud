import axios from "axios";
import { taskRequest, taskSuccess, taskFail } from "../Slices/tasksSlice";

export const getTask = async (dispatch) => {
  try {
    dispatch(taskRequest());
    const { data } = await axios.get('/crud/task/readAllTasks');
    dispatch(taskSuccess(data));
  } catch (error) {
    dispatch(taskFail(error.response.data.message));
  }
};

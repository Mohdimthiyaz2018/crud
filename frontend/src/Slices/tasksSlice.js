import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    loading: false,
  },
  reducers: {
    taskRequest(state, action) {
      return {
        loading: true,
      };
    },
    taskSuccess(state, action) {
      return {
        loading: false,
        data: action.payload.data,
      };
    },
    taskFail(state, action) {
      return {
        loading: false,
        ti: 'ti',
        err: action.payload,
      };
    },
  },
});

const { actions, reducer } = taskSlice;

export const { taskRequest, taskSuccess, taskFail } = actions;

export default reducer;

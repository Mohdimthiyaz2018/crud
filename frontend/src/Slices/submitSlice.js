import { createSlice } from "@reduxjs/toolkit";

const submitSlice = createSlice({
  name: "submit",
  initialState: {
    loading: false,
  },
  reducers: {
    submitRequest(state, action) {
      return {
        load: true,
      };
    },
    submitSuccess(state, action) {
      return {
        loading: false,
        dat: action.payload.message,
      };
    },
    submitFail(state, action) {
      return {
        loading: false,
        ti: 'ti',
        error: action.payload,
      };
    },
  },
});

const { actions, reducer } = submitSlice;

export const { submitRequest, submitSuccess, submitFail } = actions;

export default reducer;

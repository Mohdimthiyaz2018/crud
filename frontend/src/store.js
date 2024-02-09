import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import getTaskReducer from './Slices/tasksSlice';
import submitTaskReducer from './Slices/submitSlice';

const reducer = combineReducers({
    getTaskState: getTaskReducer,
    submitTaskState: submitTaskReducer
});

const store = configureStore({
    reducer: reducer,
    middleware: () => {
        return [thunk]
    }
})

export default store;
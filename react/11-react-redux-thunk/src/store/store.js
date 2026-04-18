import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "./reducers.js";

export const store = configureStore({
    reducer: {
        todos: todoReducer,
    }
});
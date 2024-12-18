"use client"
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/CounterSlice";
import baseApi from "./api/baseApi";

export const store = configureStore({
    reducer: {
        counter: counterReducer, 
        // Add other reducers here if needed
        [baseApi.reducerPath]:baseApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
});


export default baseApi;
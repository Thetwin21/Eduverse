import { configureStore } from "@reduxjs/toolkit";
import composeReducer from '../features/community/compostSlice'

export const store = configureStore({
    reducer: {
        uploads: composeReducer
    }
})
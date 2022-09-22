import { configureStore } from "@reduxjs/toolkit";
import composeReducer from '../features/community/compostSlice';
import eventReducer from '../features/Events/EventSlice';
import yourComReducer from '../features/Events/YourComSlice';

export const store = configureStore({
    reducer: {
        uploads: composeReducer,
        events: eventReducer,
        yourCom: yourComReducer
    }
})
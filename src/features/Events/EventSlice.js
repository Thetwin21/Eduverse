import { createSlice } from "@reduxjs/toolkit";
import { eventsData } from "../../Component/Data/EventsData";

const initialState = eventsData;

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
});

export const allEventPosts = (state) => state.events;
export default eventSlice.reducer;

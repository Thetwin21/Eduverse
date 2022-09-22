import { createSlice } from "@reduxjs/toolkit";
import { uploadsData } from "../../Component/Data/uploads";

const initialState = uploadsData;

const composeSlice = createSlice({
  name: 'uploads',
  initialState,
  reducers: {
    postPosts(state, action) {
      state.push(action.payload)
    } 
  }
})

export const allUploadPost = (state) => state.uploads;
export const {postPosts} = composeSlice.actions;
export default composeSlice.reducer;
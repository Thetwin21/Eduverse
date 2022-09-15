import { createSlice } from "@reduxjs/toolkit";
import { uploadsData } from "../../Component/Data/uploads";

const initialState = uploadsData;

const composeSlice = createSlice({
  name: 'uploads',
  initialState,
  reducers: {}
})

export const allUploadPost = (state) => state.uploads;
export default composeSlice.reducer;
// your Community Slice
import { createSlice } from "@reduxjs/toolkit";
import { communities } from "../../Component/Data/EventsData";

const initialState = communities;
let setMyId;

const yourComSlice = createSlice({
    name: 'yourCom',
    initialState,
    reducers:{
       getId(action){
          setMyId(action.payload)
       }
    }
})
export const {getId} = yourComSlice.actions; 
export const allComUpload  = (state) => state.yourCom;
export default yourComSlice.reducer;
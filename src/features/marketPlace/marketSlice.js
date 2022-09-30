import { createSlice } from "@reduxjs/toolkit";
import {marketItems} from '../../Component/Data/ForsaleData'

const initialState = marketItems;

const marketSlice = createSlice({
    name: "marketItems",
    initialState,
    reducers:{}
})

export const allMarketItems = state => state.marketItems;
export default marketSlice.reducer;
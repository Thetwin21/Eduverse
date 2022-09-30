import { createSlice } from "@reduxjs/toolkit";
import { BooksData } from "../../Component/Data/BooksData";

const initialState = BooksData;
const librarySlice = createSlice({
    name: "books",
    initialState,
    reducers:{}
}) 

export const allBooks = state => state.books
export default librarySlice.reducer
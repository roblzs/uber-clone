import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        search: "",
    },
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        resetSearch: (state) => {
            state.search = "";
        },
    },
});

export const { 
    setSearch,
    resetSearch,
} = searchSlice.actions;

export const searchData = (state) => state.search;

export default searchSlice.reducer;
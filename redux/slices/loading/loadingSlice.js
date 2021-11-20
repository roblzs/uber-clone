import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
    name: "loading",
    initialState: {
        loading: true,
    },
    reducers: {
        handleLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const { 
    handleLoading,
} = loadingSlice.actions;

export const loadingData = (state) => state.loading;

export default loadingSlice.reducer;
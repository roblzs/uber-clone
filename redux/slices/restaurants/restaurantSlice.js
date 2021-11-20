import { createSlice } from "@reduxjs/toolkit";

export const restaurantsSlice = createSlice({
    name: "restaurants",
    initialState: {
        restaurants: null,
    },
    reducers: {
        setRestaurants: (state, action) => {
            state.restaurants = action.payload;
        },
    },
});

export const { 
    setRestaurants,
} = restaurantsSlice.actions;

export const restaurantData = (state) => state.restaurants;

export default restaurantsSlice.reducer;
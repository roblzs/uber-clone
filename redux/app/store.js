import { configureStore } from "@reduxjs/toolkit";
import RestaurantReducer from "../slices/restaurants/restaurantSlice";
import LoadingReducer from "../slices/loading/loadingSlice";
import SearchReducer from "../slices/search/searchSlice";

export const store = configureStore({
    reducer: {
        restaurants: RestaurantReducer,
        loading: LoadingReducer,
        search: SearchReducer,
    },
});
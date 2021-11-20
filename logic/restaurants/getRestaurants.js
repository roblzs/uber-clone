import axios from "axios"
import { setRestaurants } from "../../redux/slices/restaurants/restaurantSlice";
import { YELP_API_KEY } from "../api/keys";
import { YELP_RESTAURANT_ROUTE } from "../api/urls"


export const getRestaurants = (location, dispatch) => {
    if(YELP_API_KEY && YELP_RESTAURANT_ROUTE){
        const route = `${YELP_RESTAURANT_ROUTE}&location=${location}`;
        const headers = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`
            }
        }

        axios.get(route, headers).then((res) => {
            dispatch(setRestaurants(res.data.businesses));
        }).catch((err) => {
            console.log(err);
        });
    }
};
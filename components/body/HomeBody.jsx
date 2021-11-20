import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { restaurantData } from '../../redux/slices/restaurants/restaurantSlice';
import { searchData } from '../../redux/slices/search/searchSlice';
import Categories from './categories/Categories';
import RestaurantItem from './restaurantItem/RestaurantItem';

export default function HomeBody() {
    const restaurantInfo = useSelector(restaurantData);
    const searchInfo = useSelector(searchData);


    return (
        <HomePageBodyStyle showsVerticalScrollIndicator={false}>
            <Categories />
            {
                restaurantInfo && restaurantInfo.restaurants && restaurantInfo.restaurants.map((restaurant, i) => {
                    if(searchInfo.search.length === 0){
                        return(
                            <RestaurantItem 
                                key={i}
                                image={restaurant.image_url}
                                about={restaurant.name}
                                status={restaurant.is_closed}
                                rating={restaurant.rating}
                            />
                        )
                    }else if(restaurant.name.substr(0, searchInfo.search.length).toLowerCase() === searchInfo.search.toLowerCase()){
                        return(
                            <RestaurantItem 
                                key={i}
                                image={restaurant.image_url}
                                about={restaurant.name}
                                status={restaurant.is_closed}
                                rating={restaurant.rating}
                            />
                        )
                    }
                    return null;
                })
            }
            
        </HomePageBodyStyle>
    )
}

const HomePageBodyStyle = styled.ScrollView`

`;
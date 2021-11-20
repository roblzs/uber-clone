import React, { useEffect } from 'react'
import { Text } from 'react-native'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { getRestaurants } from '../../logic/restaurants/getRestaurants';
import { restaurantData } from '../../redux/slices/restaurants/restaurantSlice';

export default function Loading({loading, setLoading}) {
    const restaurantInfo = useSelector(restaurantData);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!restaurantInfo.restaurants){
            getRestaurants("SanDiego", dispatch);
        }
    }, [restaurantInfo.restaurants]);

    useEffect(() => {
        if(restaurantInfo.restaurants){
            setLoading(false);
        }
    }, [restaurantInfo.restaurants]);
    
    if(loading){
        return (
            <LoadingStyles>
                <Text>Loading</Text>
            </LoadingStyles>
        )
    }
    return null;
}

const LoadingStyles = styled.View`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`;
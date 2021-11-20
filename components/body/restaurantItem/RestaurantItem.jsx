import React from 'react'
import styled from 'styled-components/native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantItem({image, about, status, rating}) {
    return (
        <RestaurantItemButtonStyle activeOpacity={1}>
            <RestaurantItemStyle>
                <RestaurantItemImage src={image}/>
                <RestaurantItemInfo about={about} status={status} rating={rating} />
            </RestaurantItemStyle>
        </RestaurantItemButtonStyle>
    )
}

const RestaurantItemImage = ({src}) => {
    return (
        <>
            <RestaurantItemImageStyle 
                source={{
                    uri: src
                }}
            />
            <RestaurantItemImageButtonStyle>
                <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
            </RestaurantItemImageButtonStyle>
        </>
    )
}

const RestaurantItemInfo = ({about, status, rating}) => {
    return (
        <RestaurantItemInfoStyle>
            <RestaurantItemAboutTimeContainerStyle>
                <RestaurantItemInfoAboutTextStyle>{about}</RestaurantItemInfoAboutTextStyle>
                <RestaurantItemInfoTimeTextStyle>{status ? "Closed" : "Open"}</RestaurantItemInfoTimeTextStyle>
            </RestaurantItemAboutTimeContainerStyle>
            <RestaurantItemInfoRatingContainerStyle>
                <RestaurantItemInfoRatingTextStyle>{rating}</RestaurantItemInfoRatingTextStyle>
            </RestaurantItemInfoRatingContainerStyle>
        </RestaurantItemInfoStyle>
    )
}

const RestaurantItemButtonStyle = styled.TouchableOpacity`
    margin-bottom: 30px;
`;

const RestaurantItemStyle = styled.View`
    background: #fff;
    padding: 15px;
    margin-top: 10px;
`;

const RestaurantItemImageStyle = styled.Image`
    width: 100%;
    height: 180px;
    position: relative;
`;

const RestaurantItemImageButtonStyle = styled.TouchableOpacity`
    position: absolute;
    right: 20px;
    top: 20px;
`;

const RestaurantItemInfoStyle = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
`;

const RestaurantItemAboutTimeContainerStyle = styled.View`
    
`;

const RestaurantItemInfoAboutTextStyle = styled.Text`
    font-size: 15px;
    font-weight: bold;
`;

const RestaurantItemInfoTimeTextStyle = styled.Text`
    font-size: 13px;
    color: gray;
`;

const RestaurantItemInfoRatingContainerStyle = styled.View`
    background: #eee;
    height: 30px;
    width: 30px;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
`;

const RestaurantItemInfoRatingTextStyle = styled.Text`

`;


import React from 'react'
import { ScrollView } from 'react-native'
import styled from 'styled-components/native'

const items = [
    {
        image: require("../../../assets/images/shopping-bag.png"),
        text: "Pick-up"
    },
    {
        image: require("../../../assets/images/soft-drink.png"),
        text: "Soft Drinks"
    },
    {
        image: require("../../../assets/images/bread.png"),
        text: "Bakery Items"
    },
    {
        image: require("../../../assets/images/fast-food.png"),
        text: "Fast Foods"
    },
    {
        image: require("../../../assets/images/deals.png"),
        text: "Deals"
    },
    {
        image: require("../../../assets/images/coffee.png"),
        text: "Coffee & Tea"
    },
    {
        image: require("../../../assets/images/desserts.png"),
        text: "Desserts"
    },
]

export default function Categories() {
    return (
        <CategoryStyle>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                {
                    items.map((item, i) => (
                        <CategoryItemStyle key={i}>
                            <CategoryItemImageStyle source={item.image} style={{resizeMode: "contain"}} />
                            <CategoryItemTextStyle>{item.text}</CategoryItemTextStyle>
                        </CategoryItemStyle>
                    ))
                }
            </ScrollView>
        </CategoryStyle>
    )
}

const CategoryStyle = styled.View`
    flex-direction: row;
    margin-top: 10px;
    padding: 10px;
    background: #fff;
`;

const CategoryItemStyle = styled.View`
    margin-right: 20px;
    align-items: center;
    justify-content: center;
    height: 60px;
`;

const CategoryItemImageStyle = styled.Image`
    width: 50px;
    height: 40px;
`;

const CategoryItemTextStyle = styled.Text`
    font-size: 13px;
    font-weight: bold;
`;
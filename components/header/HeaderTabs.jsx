import React, { useState } from 'react'
import styled from 'styled-components/native'

export default function HeaderTabs() {
    const [activeTab, setActiveTab] = useState("Delivery");

    return (
        <HeaderTabStyle>
            <HeaderButton buttonText="Delivery" setActiveTab={setActiveTab} activeTab={activeTab} />
            <HeaderButton buttonText="Pickup" setActiveTab={setActiveTab} activeTab={activeTab} />
        </HeaderTabStyle>
    )
}

const HeaderButton = ({buttonText, setActiveTab, activeTab}) => {
    const changeActiveTab = () => {
        setActiveTab(buttonText);
    }

    if(activeTab === buttonText){
        return(
            <HeaderTabButtonStyleActive onPress={changeActiveTab}>
                <HeaderTabButtonTextActiveStyle>{buttonText}</HeaderTabButtonTextActiveStyle>
            </HeaderTabButtonStyleActive>
        )
    }
    return(
        <HeaderTabButtonStyle onPress={changeActiveTab}>
            <HeaderTabButtonTextStyle>{buttonText}</HeaderTabButtonTextStyle>
        </HeaderTabButtonStyle>
    )
}

const HeaderTabStyle = styled.View`
    flex-direction: row;
    align-self: center;
`;

const HeaderTabButtonStyle = styled.TouchableOpacity`
    background: #fff;
    border-radius: 30px;
    padding: 6px 16px;
`;

const HeaderTabButtonStyleActive = styled.TouchableOpacity`
    background: #000;
    border-radius: 30px;
    padding: 6px 16px;
`;

const HeaderTabButtonTextStyle = styled.Text`
    color: #000;    
    font-size: 16px;
    font-weight: 900;
`;

const HeaderTabButtonTextActiveStyle = styled.Text`
    color: #fff;    
    font-size: 16px;
    font-weight: 900;
`;
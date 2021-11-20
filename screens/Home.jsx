import React from 'react'
import styled from 'styled-components/native';
import HomeBody from '../components/body/HomeBody';
import HeaderTabs from '../components/header/HeaderTabs'
import SearchBar from '../components/header/SearchBar';

export default function Home() {
    return (
        <HomePageStyle>
            <HomePageHeaderStyle>
                <HeaderTabs />
                <SearchBar />
            </HomePageHeaderStyle>
            <HomeBody />
        </HomePageStyle>
    )
}

const HomePageStyle = styled.View`
    width: 100%;
    height: 100%;
    background: #eee;
`;

const HomePageHeaderStyle = styled.View`
    width: 100%;
    padding: 15px 15px 30px 15px;
    background: #fff;
`;
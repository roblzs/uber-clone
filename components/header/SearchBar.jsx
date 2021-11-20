import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import styled from 'styled-components/native'
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { searchData, setSearch } from '../../redux/slices/search/searchSlice';

export default function SearchBar() {
    const dispatch = useDispatch();
    const searchInfo = useSelector(searchData);

    const updateSearchBar = (e) => {
        dispatch(setSearch(e.target.value));
    }

    return (
        <HeaderSearchStyle>
            <GooglePlacesAutocomplete 
                placeholder="Search"
                value={searchInfo.search}
                onChange={(e) => updateSearchBar(e)}
                styles={{
                    textInput: {
                        backgroundColor: "#eee",
                        borderRadius: 20,
                        fontWeight: "700",
                        marginTop: 7,
                    },
                    textInputContainer: {
                        backgroundColor: "#eee",
                        borderRadius: 50,
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: 10
                    }
                }}
                renderLeftButton={() => (
                    <HeaderSearchBarLeftIconStyle>
                        <Ionicons name="location-sharp" size={24} />
                    </HeaderSearchBarLeftIconStyle>
                )}
                renderRightButton={() => (
                    <HeaderSearchBarRightButtonStyle>
                        <AntDesign name="clockcircle" size={11} />
                        <HeaderSearchBarRightButtonTextStyle>Search</HeaderSearchBarRightButtonTextStyle>
                    </HeaderSearchBarRightButtonStyle>
                )}
            />
        </HeaderSearchStyle>
    )
}

const HeaderSearchStyle = styled.View`
    width: 100%;
    height: 40px;
    margin-top: 10px;
`;

const HeaderSearchBarLeftIconStyle = styled.View`
    margin-left: 10px;
`;

const HeaderSearchBarRightButtonStyle = styled.View`
    margin-right: 8px;
    flex-direction: row;
    background: #fff;
    padding: 9px;
    border-radius: 30px;
    align-items: center;
`;

const HeaderSearchBarRightButtonTextStyle = styled.Text`
    margin-left: 6px;
`;
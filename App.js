import React, { useState } from "react";
import { Provider } from "react-redux";
import styled from "styled-components/native";
import Loading from "./components/loading/Loading";
import { store } from "./redux/app/store";
import Home from "./screens/Home";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Provider store={store}>
      {loading ? (
        <Loading 
          loading={loading}
          setLoading={setLoading}
        />
      ) : (
        <AppStyle>
          <Home />
        </AppStyle>
      )}
    </Provider>
  );
}

const AppStyle = styled.View`
  padding-top: 25px;
`;
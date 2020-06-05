import React from "react";
import styled from "styled-components";
import ScrollableAnchor from "react-scrollable-anchor";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import MenuLeft from "./components/MenuLeft";

function App() {
  return (
    <Container>
      <MenuList>
        <MenuLeft></MenuLeft>
      </MenuList>
      <Content>
        <HomePage />
        <AboutPage />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100%;
`;
const MenuList = styled.div`
  position: fixed;
  background: black;
  height: 100%;
  width: 20%;
`;
const Content = styled.div`
  background: white;
  margin-left: 20%;
`;

export default App;

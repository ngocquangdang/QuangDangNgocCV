import React from "react";
import styled from "styled-components";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import MenuLeft from "./components/MenuLeft";
import MyProeject from "./components/MyProject";
import MyExperience from "./components/MyExperience";
import Footer from "./components/Footer";

function App() {
  return (
    <Container>
      <MenuList>
        <MenuLeft></MenuLeft>
      </MenuList>
      <Content>
        <HomePage />
        <AboutPage />
        <MyExperience />
        <MyProeject />
        <Footer />
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
  width: 300px;
`;
const Content = styled.div`
  position: relative;
  background: white;
  margin-left: 300px;
  margin-right: 0;
  width: 100%;
`;

export default App;

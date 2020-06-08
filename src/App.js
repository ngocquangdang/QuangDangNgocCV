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
  @media (min-width: 1024px) and (max-width: 1279) {
    display: flex;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    display: flex;
  }
  @media (min-width: 465px) and (max-width: 767px) {
    flex-direction: column;
  }
  @media (min-width: 320px) and (max-width: 464px) {
    flex-direction: column;
  }
`;
const MenuList = styled.div`
  position: fixed;
  background: black;
  height: 100%;
  width: 300px;
  @media (min-width: 1025px) and (max-width: 1280) {
    width: 250px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }
  @media (min-width: 465px) and (max-width: 767px) {
    display: none;
  }
  @media (min-width: 320px) and(max-width: 464px) {
    display: none;
  }
`;
const Content = styled.div`
  position: relative;
  background: white;
  margin-left: 300px;
  margin-right: 0;
  width: 100%;
  @media (min-width: 1025px) and (max-width: 1279) {
    margin-left: 250px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-left: 0;
  }
  @media (min-width: 465px) and (max-width: 767px) {
    margin: 0;
  }
  @media (min-width: 320px) and (max-width: 464px) {
    margin: 0;
  }
`;

export default App;

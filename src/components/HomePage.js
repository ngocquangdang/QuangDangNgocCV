import React from "react";
import styled from "styled-components";
import HomeImage from "./imgs/homepage.jpg";

export default function HomePage() {
  return (
    <Container id="home-page">
      <div
        style={{
          position: "relative",
          backgroundImage: `url(${HomeImage})`,
          backgroundSize: "cover",
          height: "100%",
        }}
      >
        <Content>
          <Name>ngoc quang dang</Name>
          <Description>I'm a Front-end Developer</Description>
        </Content>
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          backgroundColor: "black",
          opacity: 0.7,
          height: "100vh",
          width: "100%",
        }}
      ></div>
    </Container>
  );
}
const Description = styled.span`
  display: block;
  font-size: 24px;
  font-weight: 900;
  line-height: 2.5;
  @media (min-width: 320px) and (max-width: 464px) {
    font-size: 20px;
  }
`;
const Name = styled.span`
  font-weight: 900;
  font-size: 60px;
  text-transform: capitalize;
  @media (min-width: 320px) and (max-width: 464px) {
    font-size: 36px;
  }
`;
const Content = styled.div`
  position: absolute;
  top: 30%;
  left: 35%;
  color: #ffffff;
  z-index: 300;
  @media (min-width: 768px) and (max-width: 1023px) {
    top: 35%;
    left: 5%;
  }
  @media (min-width: 320px) and (max-width: 464px) {
    top: 35%;
    left: 5%;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

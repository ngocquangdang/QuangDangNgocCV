import React from "react";
import styled, { keyframes } from "styled-components";
import ImageCover from "./imgs/cover.jpg";
export default function AboutPage() {
  const initdata = [
    { key: "name", description: "ngoc quang dang" },
    { key: "phone", description: "+84 984 863 639" },
    { key: "birthday", description: "06/13/1998" },
    { key: "email", description: "ngocquang.nq98@gmail.com", unCap: true },
    {
      key: "address",
      description: "459 ton duc thang str, hoa khanh nam ward, da nang",
    },
    {
      key: "facebook",
      description: "https:/fb.com/ngoc.quang256",
      unCap: true,
    },
  ];
  return (
    <Container id="about-me">
      <Avatar>
        <img
          src={ImageCover}
          alt=""
          style={{ width: "100%" }}
        />
      </Avatar>
      <About>
        <Title>about me</Title>
        <Detail>
          <SubTitle>career goal</SubTitle>
          <Paragrap>
            Improve programming skills, English skills, technical skills and
            soft skills necessary for software engineer. Master front-end in two
            years, after is a full stack web developer in three-four years.
          </Paragrap>
          <ContactGroup>
            {initdata.map((item, index) => (
              <Contact key={index}>
                <Label>{item.key}: </Label>
                <Description cap={item.unCap}>{item.description}</Description>
              </Contact>
            ))}
          </ContactGroup>
        </Detail>
        <ButtonGroup>
          <Button href="#my-experience" black>
            experience
          </Button>
          <Button href="#my-project"> projects</Button>
        </ButtonGroup>
      </About>
    </Container>
  );
}
const fadeInLeftAnimation = keyframes`
  from {
    opacity:0;
    transform: translatex(-100px);
  }
  to{
    opacity:1;
    transform: translatex(0);
  }
`;
const fadeInRightAnimation = keyframes`
from {
    opacity:0;
    transform: translatex(100px);
  }
  to{
    opacity:1;
    transform: translatex(0);
  }
`;
const Container = styled.div`
  display: flex;
  padding: 100px 3%;
  justify-content: space-around;

  @media (min-width: 1024px) and (max-width: 1280px) {
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
  }
  @media (min-width: 465px) and (max-width: 767px) {
    flex-direction: column;
  }
  @media (max-width: 464px) {
    flex-direction: column;
  }
`;
const Avatar = styled.div`
  width: 430px;
  animation-name: ${fadeInLeftAnimation};
  animation-duration: 2s;
  animation-delay: 0.5s;

  @media (min-width: 1024px) and (max-width: 1280) {
    flex: 1;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    display: flex;
    justify-content: center;
    margin: 16px auto;
    border-radius: 50%;
    overflow: hidden;
    width: 320px;
    height: 350px;
  }
  @media (min-width: 465px) and (max-width: 767px) {
    display: flex;
    justify-content: center;
    margin: 16px auto;
    border-radius: 50%;
    overflow: hidden;
    width: 200px;
    height: 350px;
  }
  @media (min-width: 320px) and (max-width: 464px) {
    display: flex;
    justify-content: center;
    margin: 16px auto;
    border-radius: 50%;
    overflow: hidden;
    width: 200px;
    height: 100%;
    animation-name: ${fadeInLeftAnimation};
    animation-duration: 3s;
  }
`;
const About = styled.div`
  width: 570px;
  margin-left: 20px;
  animation-name: ${fadeInRightAnimation};
  animation-duration: 2s;

  @media (min-width: 1024px) and (max-width: 1280) {
    flex: 2;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    margin: 16px auto;
    width: 100%;
  }
  @media (min-width: 465px) and (max-width: 767px) {
    width: 100%;
    margin: 0;
  }
  @media (min-width: 320px) and (max-width: 464px) {
    width: 100%;
    margin: 0;
    animation-name: ${fadeInRightAnimation};
    animation-duration: 3s;
  }
`;
const Title = styled.h1`
  text-transform: capitalize;
  margin-top: 0;
`;
const SubTitle = styled.h2`
  text-transform: capitalize;
`;
const Detail = styled.div`
  margin-bottom: 30px;
`;
const Paragrap = styled.div`
  color: #333;
  padding-bottom: 20px;
  border-bottom: 1px solid gray;
`;
const ContactGroup = styled.div`
  text-transform: capitalize;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 10px 0;
`;
const Contact = styled.div`
  line-height: 2.5;
  width: 270px;
`;
const Label = styled.label`
  font-weight: 700;
`;
const Description = styled.label`
  text-transform: ${(props) => (props.cap ? "none" : "capitalize")};
  color: #333;
  font-weight: 400;
`;
const Button = styled.a`
  background: ${(props) => (props.black ? "black" : "white")};
  color: ${(props) => (props.black ? "white" : "black")};
  text-transform: capitalize;
  padding: 1rem 3rem;
  margin-right: 20px;
  border-radius: 30px;
  box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.14);
  text-decoration: none;
  &:hover {
    color: #3e43e9;
    cursor: pointer;
  }
  @media (min-width: 320px) and (max-width: 464px) {
    margin: 0;
  }
`;
const ButtonGroup = styled.div`
  display: flex;
  @media (min-width: 1024px) and (max-width: 1280) {
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    justify-content: center;
  }
  @media (min-width: 465px) and (max-width: 767px) {
  }
  @media (min-width: 320px) and (max-width: 464px) {
    justify-content: space-around;
  }
`;

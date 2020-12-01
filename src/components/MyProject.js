import React from "react";
import styled from "styled-components";
import HomeImage from "./imgs/homepage.jpg";
import BackgroundImage from "./imgs/mass-icons.png";
export default function MyProject() {
  const myProject = [
    {
      name: "web-express",
      date_start: "10/2018",
      date_end: "12/2018",
      language: "Node Js, HTML/CSS, Javascript",
      database: "mongodb",
      member: "1",
      url: "https://github.com/ngocquangdang/web-express",
    },
    {
      name: "lluxury-restaurant",
      date_start: "05/2019",
      date_end: "08/2019",
      language: "HTML/CSS, Pug template, SASS/SCSS",
      member: "1",
      url: "https://github.com/ngocquangdang/lluxury-restaurant",
    },
    {
      name: "eTravel",
      date_start: "02/2020",
      date_end: "05/2020",
      language: "Node js, react js, HTML/CSS",
      database: "mongodb",
      member: "5",
      url: "https://bitbucket.org/royce_enclave/etravel-frontend",
    },
  ];
  return (
    <Container id='my-project'>
      <Title>My projects</Title>
      <Slider>
        <ListItem>
          {myProject.map((project, index) => (
            <CartItem key={index}>
              <Image src={HomeImage}></Image>
              <Content>
                <Date>
                  {project.date_start} - {project.date_end}
                </Date>
                <SubTitle href={`${project.url}`} target='_blank'>
                  {project.name}
                </SubTitle>
                <Description>{project.language}</Description>
                <Description>{project.database}</Description>
                <Description>Team Size: {project.member}</Description>
              </Content>
            </CartItem>
          ))}
        </ListItem>
      </Slider>
    </Container>
  );
}
const Container = styled.div`
  padding: 100px 3%;
  background-color: #ffffff;
  justify-content: space-between;
  background-image: url(${BackgroundImage});
  background-attachment: fixed;
  background-size: cover;
  @media (min-width: 345px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Title = styled.h1`
  text-align: center;
  margin-top: 0;
`;
const Slider = styled.div`
  display: flex;
`;
const ListItem = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-bottom: 0;
  padding-left: 0;
  width: 100%;
  @media (min-width: 1024px) and (max-width: 1280) {
    flex: 2;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
  }
  @media (min-width: 465px) and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 320px) and (max-width: 464px) {
    flex-direction: column;
  }
`;
const CartItem = styled.li`
  margin: 0 10px;
  text-transform: capitalize;
  @media (min-width: 768px) and (max-width: 1023px) {
    margin: 0 5px;
    justify-content: space-between;
  }
  @media (min-width: 320px) and (max-width: 464px) {
    margin: 0;
  }
`;
const Image = styled.img`
  display: flex;
  width: 350px;
  height: 250px;
`;
const Content = styled.div`
  padding: 20px 0;
`;
const Date = styled.div`
  color: gray;
  line-height: 2;
`;
const SubTitle = styled.a`
  display: block;
  width: fit-content;
  margin: 0;
  font-size: 24px;
  line-height: 2.5;
  font-weight: 700;
  text-decoration: none;
  color: #1a1a1a;
  &:visited {
    color: #1a1a1a;
    &:hover {
      color: #3e43e9;
      cursor: pointer;
    }
  }
`;
const Description = styled.span`
  display: block;
  line-height: 1.7;
`;

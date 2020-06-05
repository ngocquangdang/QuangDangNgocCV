import React from "react";
import styled from "styled-components";
import Facebook from "./imgs/facebook.svg";
import Skype from "./imgs/skype.svg";

export default function MenuLeft() {
  return (
    <Container>
      <Header>
        <Avatar>
          <img alt="" />
        </Avatar>
        <Title>abc</Title>
      </Header>
      <Menu>
        <Item>
          <Link href="#home-page">Home Page</Link>
        </Item>
        <Item>
          <Link href="#about-page">About Page</Link>
        </Item>
      </Menu>
      <Contact>
        <Icon src={Facebook}></Icon>
        <Icon src={Skype} ></Icon>
      </Contact>
    </Container>
  );
}
const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-left: 0;  
  margin-top: 20%;
`;
const Header = styled.div`

`;
const Avatar = styled.div`
  width: 125px;
  height: 125px;
  background: white;
  border-radius: 50%;
`;
const Title = styled.h5`
  color: white;
  text-align: center;
  text-transform: uppercase;
`;
const Menu = styled.ul`
  margin: 15% 0;
  padding-left: 0;
`;
const Item = styled.li`
  padding: 0.7rem;
  list-style: none;
`;
const Link = styled.a`
  text-decoration: none;
  color: white;
`;
const Contact = styled.div`
  display: flex;
  color: white;
`
const Icon = styled.img`
  margin-right: 6px;
  width: 20px;
  height: 20px;
`
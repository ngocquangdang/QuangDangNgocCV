import React from "react";
import styled from "styled-components";
export default function MenuLeft() {
  return (
    <Container>
      <Item>
        <Link href="#home-page">Home Page</Link>
      </Item>
      <Item>
        <Link href="#about-page">About Page</Link>
      </Item>
    </Container>
  );
}
const Container = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-left: 0;
  margin: 0;
`;
const Item = styled.li`
  padding: 0.7rem;  
  list-style: none;
`;
const Link = styled.a`
  text-decoration: none;
  color: white;
`;

import React from 'react';
import styled from 'styled-components';
import HomeImage from './imgs/homepage.jpg';

export default function HomePage() {
  return (
    <Container id='home-page'>
      <div
        style={{
          position: "relative",
          backgroundImage: `url(${HomeImage})`,
          backgroundSize: 'cover',
          height: "100%",
        }}
      >
      </div>
      <div style={{
        position: "absolute",
        top: 0,
        backgroundColor: "black",
        opacity: 0.6,
        height: "100vh",
        width: "100%"
      }}></div>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

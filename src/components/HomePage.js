import React from 'react';
import styled from 'styled-components';
import HomeImage from './imgs/homepage.jpg';

export default function HomePage() {
  return (
    <Container id='home-page'>
      <div
        style={{
          backgroundImage: `url(${HomeImage})`,
          backgroundSize: 'cover',
          position: 'absolute',
        }}
      >
        {' '}
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 100vh;
  background: black;
  opacity: 0.1;
`;

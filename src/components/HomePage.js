import React from "react";
import styled from "styled-components";
import ScrollableAnchor from "react-scrollable-anchor";

export default function HomePage() {
  return (
      <Container id='home-page'>
        <p>Home Page</p>
      </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;

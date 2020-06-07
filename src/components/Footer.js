import React from 'react';
import styled from 'styled-components';
import Facebook from './imgs/facebook.svg';
import Skype from './imgs/skype.svg';

export default function Footer() {
  return (
    <Container>
      <Contact>
        <Icon src={Facebook} />
        <Icon src={Skype} />
      </Contact>
      <Signature>copyright © 2020</Signature>
    </Container>
  );
}
const Icon = styled.img`
  width: 24px;
  height: 24px;
  fill: #fff;
`;
const Contact = styled.div`
  display: flex;
  justify-content: center;
`;
const Signature = styled.p`
text-transform: capitalize;
  text-align: center;
  width: 100%;
  `;
const Container = styled.div`
  padding: 100px auto;
  background: #fff;
`;

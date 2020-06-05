import React from 'react';
import styled from 'styled-components';

export default function AboutPage(){
  return (
    <Container id='about-page'>
      <Avatar>
        <div> avatar</div>
      </Avatar>
      <About>
        <div>about</div>
      </About>
    </Container>
  )
}

const Container =  styled.div`
  display: flex;
  background: gray;
  padding: 100px 150px;
  width: 100vh;
  height: 100vh;
`
const Avatar = styled.div`
   flex: 4;
   background: yellow;
`
const About = styled.div`
  flex: 5;
  background: green;
`
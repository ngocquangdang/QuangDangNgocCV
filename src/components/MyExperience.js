import React from 'react';
import styled from 'styled-components';


export default function MyExperience() {
  return (
    <Container id='my-experience'>
      <Experience>
        <div> Experience</div>
      </Experience>
      <Skill>
        
      </Skill>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 100px 3%;
  background-color: #f6f7fd;
  justify-content: space-around;
`;
const Experience = styled.div`
  width: 430px;
`;
const Skill = styled.div`
  width: 570px;
`;

import React from 'react';
import styled from 'styled-components';
import { Line } from 'rc-progress';

export default function Skill(props) {
  const { skill } = props;

  return (
    <Container>
      {skill.map((skill, index) => (
        <Item key={index}>
          <Label>{skill.skill_name}</Label>
          <Line percent={skill.percent} strokeWidth="2" strokeColor="#3e43e9" trailWidth="2"/>
        </Item>
      ))}
    </Container>
  );
}
const Container = styled.div`

  margin: 10px;
`;
const Item = styled.div`
  line-height: 2.5;
`;
const Label = styled.label`
  text-transform: uppercase;
  font-weight: 700;
`;

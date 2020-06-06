import React from 'react';
import styled from 'styled-components';

export default function Skill(props) {
  const { skill } = props;
  return (
    <Container>
      {skill.map((skill, index) => (
        <Item key={index}>
          <Label>{skill.skill_name}</Label>
          <Progress>{skill.percent}</Progress>
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
const Progress = styled.div``;

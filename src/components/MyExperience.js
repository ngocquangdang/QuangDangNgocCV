import React from "react";
import styled from "styled-components";
import Skill from "./Skills";

export default function MyExperience() {
  const experiences = [
    {
      start_date: "01/2020",
      end_date: "07/2020",
      conpany_name: "enclave company",
      position: "cadet",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
    },
    {
      start_date: "01/2020",
      end_date: "07/2020",
      conpany_name: "enclave company 2",
      position: "cadet",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
    },
  ];
  const skills = [
    { skill_name: "html/css", percent: "70" },
    { skill_name: "git", percent: "70" },
    { skill_name: "javascript", percent: "70" },
    { skill_name: "sass/scss", percent: "70" },
    { skill_name: "react", percent: "70" },
    { skill_name: "english", percent: "70" },
  ];
  return (
    <Container id="my-experience">
      <Experience>
        <Title> Experience</Title>
        <TimeLine>
          {experiences.map((exp, index) => (
            <Item key={index}>
              <Dot></Dot>
              <SubItem>
                <Date>
                  {exp.start_date} - {exp.end_date}
                </Date>
                <Name>{exp.conpany_name}</Name>
                <Position>{exp.position}</Position>
                <Description>{exp.description}</Description>
              </SubItem>
            </Item>
          ))}
        </TimeLine>
      </Experience>
      <Skills>
        <Title> Skills </Title>
        <Skill skill={skills} />
      </Skills>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 100px 3%;
  background-color: #f6f7fd;
  justify-content: space-between;
  @media (min-width: 1024px) and (max-width: 1280) {
    flex: 2;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    margin: 16px auto;
  }
  @media (min-width: 465px) and (max-width: 767px) {
    flex-direction: column;
  }
  @media (min-width: 320px) and(max-width: 464px) {
    flex-direction: column;
  }
`;
const Experience = styled.div`
  flex: 1;
`;
const Skills = styled.div`
  flex: 1;
`;
const Title = styled.h1`
  margin-top: 0;
  margin-left: 10px;
`;
const TimeLine = styled.div``;
const Dot = styled.span`
  width: 10px;
  height: 10px;
  margin-right: 0.5rem;
  margin-top: 0.2rem;
  border: 1px solid gray;
  border-radius: 50%;
`;
const Item = styled.div`
  position: relative;
  display: flex;
  text-align: center;
  margin: 1rem 1rem;
  &::after {
    position: absolute;
    content: "";
    top: 17px;
    left: 5px;
    width: 1px;
    height: 100%;
    background: gray;
    transform: translateX(-50%);
  }
  &:last-child > ${Dot} {
    &::after {
      content: none;
    }
  }
`;

const SubItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;
const Date = styled.div`
  color: gray;
`;
const Name = styled.span`
  text-transform: capitalize;
  font-weight: 700;
  line-height: 2;
`;
const Position = styled.span`
  text-transform: capitalize;
  font-weight: 700;
  line-height: 2;
`;
const Description = styled.span`
  text-align: start;
  font-size: 14px;
  line-height: 1.7;
  color: gray;
`;

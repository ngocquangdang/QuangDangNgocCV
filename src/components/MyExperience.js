import React from "react";
import styled, { keyframes } from "styled-components";
import Skill from "./Skills";

export default function MyExperience() {
  const experiences = [
    {
      start_date: "01/2020",
      end_date: "06/2020",
      conpany_name: "enclave-Software Development Centers",
      position: "internship",
      description:
        "Learn and participate in project development of internship group, understands how to teamwork, divide the work and improve soft skills",
    },
    {
      start_date: "07/2020",
      end_date: "Currently",
      conpany_name: "DigitalFortress",
      position: "front-end developer",
      description: '',
    },
  ];
  const education = [
    {
      major: "Information technology",
      school_name: "University of Science and Education",
      start_date: "08/2016",
      end_date: "06/2020",
      gpa: "2.76/4",
    },
  ];
  const skills = [
    { skill_name: "html/css", percent: "50" },
    { skill_name: "git", percent: "35" },
    { skill_name: "javascript", percent: "42" },
    { skill_name: "sass/scss", percent: "40" },
    { skill_name: "reactJs", percent: "45" },
    { skill_name: "english", percent: "30" },
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
        <br />
        <Title>Education</Title>
        <TimeLine>
          {education.map((edu, index) => (
            <Item key={index}>
              <Dot></Dot>
              <SubItem>
                <Date>
                  {edu.start_date} - {edu.end_date}
                </Date>
                <Name>{edu.school_name}</Name>
                <Position>Major: {edu.major}</Position>
                <Description>GPA: {edu.gpa}</Description>
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
const fadeDownAnimation = keyframes`
  from{
    opacity: 0;
    transform: translateY(-100px)
  }
  to{
    opacity: 1;
    transform: translateY(0)
  }
`;
const fadeUpAnimation = keyframes`
 from{
    opacity: 0;
    transform: translateY(100px)
  }
  to{
    opacity: 1;
    transform: translateY(0)
  }
`;
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
    flex-direction: column;
  }
  @media (min-width: 465px) and (max-width: 767px) {
    flex-direction: column;
  }
  @media (min-width: 320px) and (max-width: 464px) {
    flex-direction: column;
  }
`;
const Experience = styled.div`
  flex: 1;
  animation-name: ${fadeDownAnimation};
  animation-duration: 2s;
  animation-delay: 0.5s;
`;
const Skills = styled.div`
  flex: 1;
  animation-name: ${fadeUpAnimation};
  animation-duration: 2s;
  animation-delay: 0.5s;
`;
const Title = styled.h1`
  margin-top: 0;
  margin-left: 10px;
  margin-top: 20px;
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
  text-align: start;
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

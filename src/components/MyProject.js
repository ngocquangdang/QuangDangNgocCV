import React from 'react';
import styled from 'styled-components';
import HomeImage from './imgs/homepage.jpg';

export default function MyProject() {
  const myProject = [
    {
      name: 'web-express',
      date_start: '10/2018',
      date_end: '12/2018',
      language: 'Node Js, HTML/CSS, Javascript',
      database: 'mongodb',
      member: '1',
      url: 'https://github.com/ngocquangdang/web-express',
    },
    {
      name: 'lluxury-restaurant',
      date_start: '05/2019',
      date_end: '08/2019',
      language: 'HTML/CSS, Pug template, SASS/SCSS',
      member: '1',
      url: 'https://github.com/ngocquangdang/lluxury-restaurant',
    },
    {
      name: 'eTravel',
      date_start: '02/2020',
      date_end: '052020',
      language: 'Node js, react js, HTML/CSS',
      database: 'mongodb',
      member: '5',
      url: 'https://bitbucket.org/royce_enclave/etravel-frontend',
    },
  ];
  return (
    <Container id='my-project'>
      <Title>My project</Title>
      <Slider>
        <ListItem>
          {myProject.map((project, index) => (
            <CartItem key={index}>
              <Image src={HomeImage}></Image>
              <Content>
                <Date>
                  {project.date_start} - {project.date_end}
                </Date>
                <SubTitle href={`${project.url}`} target='_blank'>
                  {project.name}
                </SubTitle>
                <Description>{project.language}</Description>
                <Description>{project.database}</Description>
              </Content>
            </CartItem>
          ))}
        </ListItem>
      </Slider>
    </Container>
  );
}
const Container = styled.div`
  padding: 100px 3%;
  background-color: #ffffff;
  justify-content: space-between;
`;
const Title = styled.h1`
  text-align: center;
  margin-top: 0;
`;
const Slider = styled.div`
  display: flex;
`;
const ListItem = styled.ul`
  display: flex;
  list-style: none;
  margin-bottom: 0;
  padding-left: 0;
  width: 100%;
`;
const CartItem = styled.li`
  margin: 0 10px;
  text-transform: capitalize;
`;
const Image = styled.img`
  display: flex;
  width: 350px;
  height: 250px;
`;
const Content = styled.div`
  padding: 20px 0;
`;
const Date = styled.div`
  color: gray;
  line-height: 2;
`;
const SubTitle = styled.a`
  display: block;
  width: fit-content;
  margin: 0;
  font-size: 24px;
  line-height: 2.5;
  font-weight: 700;
  text-decoration: none;
  &:visited {
    color: black;
    &:hover {
      color: #3e43e9;
      cursor: pointer;
    }
  }
`;
const Description = styled.span`
  display: block;
  line-height: 1.7;
`;

import React from 'react';
import styled from 'styled-components';
import ImageCover from './imgs/cover.jpg';
export default function AboutPage() {
  const initdata = [
    { key: 'name', description: 'quang ngoc dang' },
    { key: 'phone', description: '+84 984 863 639' },
    { key: 'birthday', description: '06/13/1998' },
    { key: 'email', description: 'ngocquang.nq98@gmail.com', unCap: true },
    {
      key: 'address',
      description: '459 ton duc thang str, hoa khanh nam ward, da nang',
    },
    { key: 'facebook', description: 'fb.com/ngoc.quang256', unCap: true },
  ];
  return (
    <Container id='about-me'>
      <Avatar>
        <img src={ImageCover} alt='' style={{ width: '100%' }} />
      </Avatar>
      <About>
        <Title>about me</Title>
        <Detail>
          <SubTitle>career goal</SubTitle>
          <Paragrap>
            
            Improved programming skills, English skills, technical skills and
            soft skills necessary for the web developer. Master front-end in two
            years, after is a full stack web developer in three-four years.
          </Paragrap>
          <ContactGroup>
            {initdata.map((item, index) => (
              <Contact key={index}>
                <Label>{item.key}: </Label>
                <Description cap={item.unCap}>{item.description}</Description>
              </Contact>
            ))}
          </ContactGroup>
        </Detail>
        <Button href='#my-experience' black>
          experience
        </Button>
        <Button href='#my-project'> projects</Button>
      </About>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 100px 3%;
  justify-content: space-around;
`;
const Avatar = styled.div`
  width: 430px;
`;
const About = styled.div`
  width: 570px;
`;
const Title = styled.h1`
  text-transform: capitalize;
`;
const SubTitle = styled.h2`
  text-transform: capitalize;

`
const Detail = styled.div`
  margin-bottom: 30px;
`;
const Paragrap = styled.div`
  color: #333;
  padding-bottom: 20px;
  border-bottom: 1px solid gray;
`;
const ContactGroup = styled.div`
  text-transform: capitalize;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 10px 0;
`;
const Contact = styled.div`
  line-height: 2.5;
  width: 270px;
`;
const Label = styled.label`
  font-weight: 700;
`;
const Description = styled.label`
  text-transform: ${(props) => (props.cap ? 'none' : 'capitalize')};
  color: #333;
  font-weight: 400;
`;
const Button = styled.a`
  background: ${(props) => (props.black ? 'black' : 'white')};
  color: ${(props) => (props.black ? 'white' : 'black')};
  text-transform: capitalize;
  padding: 1rem 3rem;
  margin-right: 20px;
  border-radius: 30px;
  box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.14);
  text-decoration: none;
  &:hover {
    color: #3e43e9;
    cursor: pointer;
  }
`;

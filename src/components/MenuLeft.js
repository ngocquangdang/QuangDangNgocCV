import React from 'react';
import styled from 'styled-components';
import Facebook from './imgs/facebook.svg';
import Skype from './imgs/skype.svg';
import HomeRun from './imgs/home-run.svg';
import Rocket from './imgs/rocket.svg';
import StreetView from './imgs/street-view.svg';
import Work from './imgs/work.svg';

import Avatars from './imgs/avt.jpg';
export default function MenuLeft() {
  const URL = [
    { url: 'home-page', name: 'home', icon: `${HomeRun}`},
    { url: 'about-me', name: 'about', icon: `${StreetView}` },
    { url: 'my-experience', name: 'experience', icon: `${Rocket}` },
    { url: 'my-project', name: 'project', icon: `${Work}` },
  ];
  return (
    <Container>
      <Header>
        <Avatar style={{ backgroundImage: `url(${Avatars})` }} />
        <Title>quang n. dang</Title>
      </Header>
      <Menu>
        {URL.map((url, index) => (
          <Item key={index}>
            <Icon src={url.icon}/>
            <Link href={`#${url.url}`}>{url.name}</Link>
          </Item>
        ))}
      </Menu>
      <Contact>
        <Icon src={Facebook}></Icon>
        <Icon src={Skype}></Icon>
      </Contact>
    </Container>
  );
}
const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-left: 0;
  margin-top: 20%;
`;
const Header = styled.div``;
const Avatar = styled.div`
  width: 150px;
  height: 150px;
  background-size: cover;
  border-radius: 50%;
`;
const Title = styled.h5`
  color: white;
  text-align: center;
  text-transform: uppercase;
  
`;
const Menu = styled.ul`
  margin: 15% 0;
  padding-left: 0;
`;
const Item = styled.li`
  padding: 0.7rem;
  list-style: none;
  
`;

const Link = styled.a`
  text-transform: capitalize;
  text-decoration: none;
  color: white;
  &:visited{
    color: white;
    &:hover {
      color: #3e43e9;
      cursor: pointer;
    }
  }
`;
const Contact = styled.div`
  display: flex;
  color: white;
`;
const Icon = styled.img`
  margin-right: 6px;
  width: 20px;
  height: 20px;
`;

import React, { useState } from 'react';
import styled from 'styled-components';
import Facebook from './imgs/facebook.svg';
import Skype from './imgs/skype.svg';
import iHome from './imgs/homepage.svg';
import iRocket from './imgs/project.svg';
import iStreetView from './imgs/street-view.svg';
import iWork from './imgs/box.svg';

import Avatars from './imgs/avt.jpg';
export default function MenuLeft() {
  const [URL, setURL] = useState([
    { url: 'home-page', name: 'home', icon: `${iHome}`, isActive: true },
    { url: 'about-me', name: 'about', icon: `${iStreetView}`, isActive: false },
    {
      url: 'my-experience',
      name: 'experience',
      icon: `${iRocket}`,
      isActive: false,
    },
    { url: 'my-project', name: 'project', icon: `${iWork}`, isActive: false },
  ]);
  console.log('MenuLeft -> URL', URL);

  return (
    <Container>
      <Header>
        <Avatar style={{ backgroundImage: `url(${Avatars})` }} />
        <Title>quang n. dang</Title>
      </Header>
      <Menu>
        {URL.map((url, index) => (
          <Item
            key={index}
            active={url.isActive}
            onClick={() =>
              setURL(
                [
                ...URL.slice(0, index),
                {
                  ...url,
                  isActive: !url.isActive,
                },
                ...URL.slice(index + 1),
              ])
            }
          >
            <Icon src={url.icon} />
            <Link href={`#${url.url}`} active={url.isActive}>
              {url.name}
            </Link>
          </Item>
        ))}
      </Menu>
      <Contact>
        <AppContact src={Facebook}></AppContact>
        <AppContact src={Skype}></AppContact>
      </Contact>
    </Container>
  );
}
const Container = styled.ul`
  height: 100%;
  padding-left: 0;
  margin-top: 20%;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Avatar = styled.div`
  width: 150px;
  height: 150px;
  background-size: cover;
  border-radius: 50%;
`;
const Title = styled.h5`
  color: white;
  text-transform: uppercase;
`;
const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15% 0;
  padding-left: 0;
`;
const Icon = styled.img`
  width: 24px;
  height: 24px;
  padding: 0 0.5rem;
`;
const AppContact = styled.img`
  margin-right: 6px;
  width: 20px;
  height: 20px;
`;
const Item = styled.li`
  display: flex;
  width: -webkit-fill-available;
  padding: 0.7rem 0 0.7rem 1.5rem;
  list-style: none;
  border-left: ${(props) => (props.active ? '4px solid #3e43e9' : 'none')};
  &:hover {
    color: #3e43e9;
    cursor: pointer;
    > ${Icon} {
      filter: #3e43e9;
    }
  }
`;

const Link = styled.a`
  text-transform: capitalize;
  text-decoration: none;
  color: ${(props) => (props.active ? '#3e43e9' : '#ffffff')};
  padding-left: 0.5rem;
  &:visited {
    &:hover {
      color: #3e43e9;
      cursor: pointer;
    }
  }
`;
const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

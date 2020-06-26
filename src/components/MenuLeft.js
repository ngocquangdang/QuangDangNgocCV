import React, { useState } from "react";
import styled from "styled-components";
import {
  FaHome,
  IoIosRocket,
  FaStreetView,
  FaToolbox,
  FaFacebookF,
  FaSkype,
} from "react-icons/all";

import Avatars from "./imgs/avt.jpg";
export default function MenuLeft() {
  const [URL, setURL] = useState([
    { url: "home-page", name: "home", icon: <FaHome />,  },
    { url: "about-me", name: "about", icon: <FaStreetView /> },
    {
      url: "my-experience",
      name: "experience",
      icon: <IoIosRocket />,
    },
    {
      url: "my-project",
      name: "project",
      icon: <FaToolbox />,
    },
  ]);

  const setIsActive = (url) => {};
  return (
    <Container>
      <Header>
        <Avatar style={{ backgroundImage: `url(${Avatars})` }} />
        <Title>ngoc quang dang</Title>
      </Header>
      <Menu>
        {URL.map((url, index) => (
          <Item key={index} active={url.isActive}>
            {url.icon}
            <Link
              href={`#${url.url}`}
              active={url.isActive}
              onClick={() => {
                URL.map(i => i.isActive =false)
                setURL([
                  ...URL.slice(0, index),
                  {
                    ...url,
                    isActive: true,
                  },
                  ...URL.slice(index + 1),
                ]);
              }}
            >
              {url.name}
            </Link>
          </Item>
        ))}
      </Menu>
      <Contact>
        <Link href='https:/fb.com/ngoc.quang256' target='_blank'>
          <FbIcon></FbIcon>
        </Link>
        <Link href='https://join.skype.com/invite/XHKKSXWBY4oL' target='_blank'>
          <FaSky></FaSky>
        </Link>
      </Contact>
      <Signature>copyright © 2020</Signature>
    </Container>
  );
}

const FbIcon = styled(FaFacebookF)`
  font-size: 20px;
  padding: 0.5rem;
  margin-right: 5px;
  background: #212431;
  border-radius: 50%;
  &:hover {
    background: #3e43e9;
  }
`;
const FaSky = styled(FaSkype)`
  font-size: 20px;
  padding: 0.5rem;
  margin-right: 5px;
  background: #212431;
  border-radius: 50%;
  &:hover {
    background: #3e43e9;
  }
`;
const Signature = styled.p`
  color: #ffffff;
  text-transform: capitalize;
  text-align: center;
  width: 100%;
`;
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

const Link = styled.a`
  text-transform: capitalize;
  text-decoration: none;

  color: ${(props) => (props.active ? "#3e43e9" : "#ffffff")};
  padding-left: 0.5rem;
`;

const Item = styled.li`
  display: flex;
  width: -webkit-fill-available;
  padding: 0.7rem 0 0.7rem 1.5rem;
  list-style: none;
  border-left: ${(props) => (props.active ? "4px solid #3e43e9" : "none")};
  background-color: ${(props) => (props.active ? "#333" : "#000")};
  color: ${(props) => (props.active ? "#3e43e9" : "white")};

  &:hover {
    color: #3e43e9;
    background-color: #333;
    border-left: 4px solid #3e43e9;
    cursor: pointer;
    > ${Link} {
      color: inherit;
    }
  }
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

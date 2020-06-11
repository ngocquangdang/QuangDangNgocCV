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
    { url: "home-page", name: "home", icon: <FaHome />, isActive: true },
    { url: "about-me", name: "about", icon: <FaStreetView />, isActive: false },
    {
      url: "my-experience",
      name: "experience",
      icon: <IoIosRocket />,
      isActive: false,
    },
    {
      url: "my-project",
      name: "project",
      icon: <FaToolbox />,
      isActive: false,
    },
  ]);

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
              setURL([
                ...URL.slice(0, index),
                {
                  ...url,
                  isActive: !url.isActive,
                },
                ...URL.slice(index + 1),
              ])
            }
          >
            {url.icon}
            <Link href={`#${url.url}`} active={url.isActive}>
              {url.name}
            </Link>
          </Item>
        ))}
      </Menu>
      <Contact>
        <Link href="https:/fb.com/ngoc.quang256" target="_blank">
          <FaFacebookF style={{ fontSize: "20px", marginRight: "5px", padding: ".5rem", borderRadius: "50%", backgroundColor:"#212431"}} />
        </Link>
        <Link target="_blank">
          <FaSkype style={{ fontSize: "20px", padding: ".5rem", borderRadius: "50%", backgroundColor:"#212431" }} />
        </Link>
      </Contact>
      <Signature>copyright © 2020</Signature>
    </Container>
  );
}

const FbIcon = styled(FaFacebookF)`
  font-size: 20px;
  padding: .5rem;
  margin-right: 5px;
  background: #212431;
  border-radius: 50%;
  &:hover{
    background: #3e43e9;
  }
`
const FaSky = styled(FaSkype)`
  font-size: 20px;
  padding: .5rem;
  margin-right: 5px;
  background: #212431;
  border-radius: 50%;
  &:hover{
    background: #3e43e9;
  }
`
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
  color: ${(props) => (props.active ? "#3e43e9" : "white")};

  &:hover {
    color: #3e43e9;
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

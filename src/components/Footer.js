import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaSkype } from "react-icons/all";

export default function Footer() {
  return (
    <Container>
      <Contact>
        <Link href='https:/fb.com/ngoc.quang256' target='_blank'>
          <FbIcon></FbIcon>
        </Link>
        <Link href='https://join.skype.com/invite/XHKKSXWBY4oL' target='_blank'>
          <FaSky></FaSky>
        </Link>
      </Contact>
      <Signature>copyright © 2020 </Signature>
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

const Link = styled.a`
  text-transform: capitalize;
  text-decoration: none;

  color: ${(props) => (props.active ? "#3e43e9" : "#ffffff")};
  padding-left: 0.5rem;
`;
const Contact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Signature = styled.p`
  text-transform: capitalize;
  text-align: center;
  width: 100%;
`;
const Container = styled.div`
  padding: 15px;
  background: #000000;
  color: #ffffff;
`;

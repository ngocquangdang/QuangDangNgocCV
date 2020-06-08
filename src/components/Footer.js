import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaSkype } from "react-icons/all";

export default function Footer() {
  return (
    <Container>
      <Contact>
        <FaFacebookF style={{fontSize: "24px", marginRight: "10px"}} /> 
        <FaSkype style={{fontSize: "24px"}} />
      </Contact>
      <Signature>copyright © 2020 </Signature>
    </Container>
  );
}

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

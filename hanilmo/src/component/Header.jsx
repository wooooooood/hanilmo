import React from "react";
import title from "../img/title.png";
import styled from "styled-components";

function Header () {
  return (
    <Container>
    <LogoImg src={title} />
    </Container>
  );
}

export default Header;

const Container=styled.div`
background-color:#F8F8F8;
padding: 0;
margin: 0;
`;

const LogoImg = styled.img`
  @media (max-width: 480px){
    width: 90% !important;
  }
  width: 100%;
  max-width: 400px;
  margin: auto;
  display: block;
`;

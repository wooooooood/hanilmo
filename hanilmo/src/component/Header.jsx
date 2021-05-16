import React from "react";
import title from "../img/title.png";
import styled from "styled-components";

const LogoImg = styled.img`
  &@media (max-width: 480px){
    width: 90% !important;
  }
  width: 100%;
  max-width: 400px;
  margin: 10px auto;
  display: block;
`;

function Header () {
  return (
    <>
    <LogoImg src={title} />
    </>
  );
}

export default Header;

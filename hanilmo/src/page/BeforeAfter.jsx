import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import before from "../img/before.jpg";
import after from "../img/after.jpg";
import front from "../img/front.jpg";

export const BeforeAfter = () => {
  return (
    <>
      <Helmet>
        <title>한일모 :: 착용사진</title>
      </Helmet>
      <ImageContainer innerText={"착용 전"}><img src={before}/></ImageContainer>
      <ImageContainer innerText={"착용 후"}><img src={after}/></ImageContainer>
      <ImageContainer innerText={"정면"}><img src={front}/></ImageContainer>
    </>
  );
};

const ImageContainer = styled.div`
  @media (max-width: 480px){
    width: 90% !important;
  }
  width: 33.33%;
  margin: auto;
  display: inline-flex;
`;//${({ width }) => width}px;

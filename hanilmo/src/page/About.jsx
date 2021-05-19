import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import about from "../img/about.jpg";

export const About = () => {
  return (
    <>
      <Helmet>
        <title>한일모 :: 소개</title>
      </Helmet>
      <ImageContainer>
        <Image src={about}/>
      </ImageContainer>
    </>
  );
};

const ImageContainer = styled.div`
  @media (max-width: 768px){
    width: 100vw;
  }
  text-align: center;
`;

const Image = styled.img`
  @media (max-width: 768px){
    width: 100%;
  }
`;

import React from "react";
import { Helmet } from "react-helmet";
import main from "../img/0.jpg";
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";
import img6 from "../img/6.jpg";
import styled from "styled-components";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>한일모 :: 이상무 명품가발</title>
      </Helmet>
      <div style={{backgroundColor: '#ECECEE', padding: '0px'}}>
      <Container>
      <MainImg src={main}/>
      </Container>
      </div>
      <Container>
      <SubImg src={img1}/>
      <SubImg src={img2}/>
      <SubImg src={img3}/>
      <SubImg src={img4}/>
      <SubImg src={img5}/>
      <SubImg src={img6}/>
      </Container>
    </>
  );
};

const Container = styled.div`
@media (max-width: 768px)
{
width: 100vw;
}
width: 70%;
margin: auto;
`;

const MainImg = styled.img`
@media (max-width: 768px)
{
width: 100%;
}
padding: 0;
margin: 0;
`;

const SubImg = styled.img`
@media (max-width: 768px)
{
width: 100%;
}
width: 50%;
margin: 0;
`;
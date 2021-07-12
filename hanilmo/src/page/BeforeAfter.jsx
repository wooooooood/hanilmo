import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import before from '../img/before.jpg';
import after from '../img/after.jpg';
import front from '../img/front.jpg';

export const BeforeAfter = () => {
  return (
    <>
      <Helmet>
        <title>한일모 :: 착용사진</title>
      </Helmet>
      <Wrapper>
        <ImageContainer innerText={'착용 전'}>
          <Image src={before} />
        </ImageContainer>
        <ImageContainer innerText={'착용 후'}>
          <Image src={after} />
        </ImageContainer>
        <ImageContainer innerText={'정면'}>
          <Image src={front} />
        </ImageContainer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  text-align: center;
`;

const Image = styled.img`
  margin: auto;
`;

const ImageContainer = styled.div`
  @media (max-width: 480px) {
    width: 90% !important;
  }
  margin: 15px;
  display: inline-flex;
`; //${({ width }) => width}px;

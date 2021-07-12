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
        <div className="image-container" innerText={'착용 전'}>
          <img className="image" src={before} alt="착용 전"/>
        </div>
        <div className="image-container" innerText={'착용 후'}>
          <img className="image" src={after} alt="착용 후"/>
        </div>
        <div className="image-container" innerText={'정면'}>
          <img className="image" src={front} alt="정면"/>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  text-align: center;

  div.image-container {
    @media (max-width: 480px) {
      width: 90% !important;
    }
    margin: 15px;
    display: inline-flex;
  }

  img.image {
    margin: auto;
  }
`;

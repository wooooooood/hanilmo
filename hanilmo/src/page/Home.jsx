import React from 'react';
import { Helmet } from 'react-helmet';
import main from '../img/0.jpg';
import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';
import img4 from '../img/4.jpg';
import img5 from '../img/5.jpg';
import img6 from '../img/6.jpg';
import styled from 'styled-components';

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>한일모 :: 이상무 명품가발</title>
      </Helmet>
      <div style={{ backgroundColor: '#ECECEE', padding: '0px' }}>
        <Container>
          <img className="main-image" src={main} />
        </Container>
      </div>
      <Container>
        <img className="sub-image" src={img1} />
        <img className="sub-image" src={img2} />
        <img className="sub-image" src={img3} />
        <img className="sub-image" src={img4} />
        <img className="sub-image" src={img5} />
        <img className="sub-image" src={img6} />
      </Container>
    </>
  );
};

const Container = styled.div`
  @media (max-width: 768px) {
    width: 100vw;
  }
  width: 70%;
  margin: auto;

  img.main-image {
    @media (max-width: 768px) {
      width: 100%;
    }
    padding: 0;
    margin: 0;
  }

  img.sub-image {
    @media (max-width: 768px) {
      width: 100%;
    }
    width: 50%;
    margin: 0;
  }
`;

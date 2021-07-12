import React from 'react';
import { Helmet } from 'react-helmet';
import about from '../img/about.jpg';
import '../style/tailwind.css';

export const About = () => {
  return (
    <>
      <Helmet>
        <title>한일모 :: 소개</title>
      </Helmet>
      <div>
        <img src={about} className="w-100 mx-auto" />
      </div>
    </>
  );
};

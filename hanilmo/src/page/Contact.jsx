import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import addr from "../img/addr.jpg";

export const Contact = () => {
  return (
    <>
      <Helmet>
        <title>한일모 :: 오시는길</title>
      </Helmet>
      <AddressImg src={addr}/>
    </>
  );
};

const AddressImg = styled.img`
@media (max-width: 768px)
{
    width: 100%;
}`;

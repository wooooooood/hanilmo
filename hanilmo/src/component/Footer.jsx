import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <>
      <Container>
        <FooterText>
          정품가발 한일모 | 대표 : 이상무 | 전화 :{' '}
          <a href="tel:055-292-4567" style={{ textDecoration: 'none', color: '#000000' }}>
            055-292-4567
          </a>
        </FooterText>
        <FooterText>경남 창원시 마산회원구 석전동 223-16(2층)</FooterText>
        <FooterText>
          <strong>Copyright 명품가발 한일모 all rights reserved.</strong>
        </FooterText>
      </Container>
    </>
  );
};

export default Footer;

const Container = styled.nav`
  padding: 8px 0;
  border-top: 1px solid #e4e4e4;
  background-color: #f8f8f8;
  margin: auto;
  text-align: center;
`;

const FooterText = styled.div`
  font-size: 12px;
  font-weight: 400;
  padding: 2px 0;
`;

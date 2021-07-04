import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  height: 100px;
  width: 100%;
  background: #292929;
  position: relative;
  bottom: 0;
  color: #a5a5a5;
`;

const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImageContainer = styled.div`
  height: 50px;
  width: 50px;
`;

const StyledTextContainer = styled.div``;

const StyledTitle = styled.h3`
  margin: 0;
`;

const StyledText = styled.div``;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <StyledImageContainer></StyledImageContainer>
        <StyledTextContainer>
          <StyledTitle>Test</StyledTitle>
          <StyledText>Testing text bla bla bla</StyledText>
        </StyledTextContainer>
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;

import React from 'react';
import styled from 'styled-components';
import whiteLogo from '../../../assets/logo-white.svg';

const StyledFooter = styled.footer`
  width: 100%;
  background: #292929;
  position: relative;
  bottom: 0;
  color: #a5a5a5;
  padding: 3rem;
`;

const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImageContainer = styled.div`
  margin-bottom: 29px;
  padding-right: 8px;
`;

const StyledLogo = styled.img`
  height: 38px;
`;

const StyledTextContainer = styled.div`
  max-width: 300px;
`;

const StyledTitle = styled.h3`
  margin: 0.2rem 0;
`;

const StyledText = styled.div`
  font-size: 1rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <StyledImageContainer>
          <StyledLogo src={whiteLogo}></StyledLogo>
        </StyledImageContainer>
        <StyledTextContainer>
          <StyledTitle>Beta kommune</StyledTitle>
          <StyledText>
            Design og digital samfunnsutvikling fra innbyggernes perspektiv
          </StyledText>
        </StyledTextContainer>
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;

import React from 'react';
import styled from 'styled-components';

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
  height: 50px;
  width: 50px;
  margin-bottom: 30px;
`;

const StyledTextContainer = styled.div`
  max-width: 300px;
`;

const StyledTitle = styled.h3`
  margin: 0;
`;

const StyledText = styled.div`
  font-size: 1rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <StyledImageContainer></StyledImageContainer>
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

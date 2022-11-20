import React from 'react';
import styled from 'styled-components';
import Button from '../../Button/Button';
import device from '../../../constants/breakpoints';

const StyledHeader = styled.header`
  height: 103px;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 100;
`;

const StyledContainer = styled.div`
  height: 11rem;
  display: flex;
  flex-grow: 1;
  max-width: 1020px;
  padding: 0 10px;
  align-items: center;
  justify-content: center;

  @media only screen and ${device.sm} {
    height: 103px;
    justify-content: space-between;
    padding: 0 20px 0 15px;
  }
`;

const StyledContentLeft = styled.span`
  z-index: 100;
  font-size: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.tertiary};

  @media only screen and ${device.sm} {
    font-size: 1.5rem;
  }
`;

const StyledContentRight = styled.div`
  z-index: 100;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  @media only screen and ${device.sm} {
  }
`;

const StyledLink = styled.a`
  display: none;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.text.tertiary};

  &:not(:last-child) {
    margin-right: 2rem;
  }

  @media only screen and ${device.sm} {
    text-decoration: unset;
    display: block;
  }
`;

const Header = ({
  showLoginModal,
  setShowLoginModal,
  setShowWhatsThisModal,
}) => {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledContentLeft>Gamle Munch</StyledContentLeft>
        <StyledContentRight>
          <StyledLink onClick={() => setShowWhatsThisModal(true)}>
            Hva er dette?
          </StyledLink>
          <StyledLink
            onClick={() =>
              (window.location = 'mailto:jonas.vesterhus@kul.oslo.kommune.no')
            }
          >
            Kontakt oss
          </StyledLink>
        </StyledContentRight>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;

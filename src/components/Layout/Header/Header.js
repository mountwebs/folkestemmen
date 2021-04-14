import React from "react";
import styles from "./Header.module.css";
import logoFull from "../../../assets/logo-full.svg";
import styled from "styled-components";
import Button from "../../Button/Button";
import device from "../../../constants/breakpoints";

const StyledButton = styled(Button)`
  font-size: 18px;
  margin-top: 2em;

  @media only screen and ${device.sm} {
    display: none;
  }
`;

const StyledHeader = styled.header`
  height: 103px;
  width: 100%;
`;

const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLogo = styled.img`
  flex-grow: 1;
  max-width: 500px;
  margin: 10px 57.5px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledLogo src={logoFull} alt="Beta folkestemmen - logo" />
        <StyledButton primary icon="PersonFill">
          Logg inn
        </StyledButton>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;

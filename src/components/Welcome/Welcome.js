import React from "react";
import styles from "./Welcome.module.css";
import Button from "../Button/Button";
import styled from "styled-components";
import device from "../../constants/breakpoints";

const StyledButton = styled(Button)`
  font-size: 18px;
  margin-top: 2em;

  @media only screen and ${device.sm} {
    display: none;
  }
`;

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <div className={styles.container}>
        <h1 className={styles.header}>Velkommen til Folkestemmen!</h1>
        <p className={styles.description}>
          Gi tilbakemelding og kom med innspill på spørsmål fra kommunen din{" "}
        </p>
        <StyledButton primary icon="PersonFill">
          Logg inn
        </StyledButton>
      </div>
    </div>
  );
};

export default Welcome;

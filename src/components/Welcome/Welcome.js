import React from "react";
import styles from "./Welcome.module.css";
import Button from "../Button/Button";
import styled from 'styled-components';

const StyledButton = styled(Button)`
  font-size: 18px;
`

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <div className={styles.container}>
        <h1 className={styles.header}>Velkommen til Folkestemmen!</h1>
        <p className={styles.description}>
          Gi tilbakemelding og kom med innspill på spørsmål fra kommunen din{" "}
        </p>
        <StyledButton primary icon="PersonFill">Logg inn</StyledButton>
      </div>
    </div>
  );
};

export default Welcome;

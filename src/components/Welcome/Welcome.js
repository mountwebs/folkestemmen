import React from "react";
import styles from "./Welcome.module.css";
import Button from "../Button/Button";
import { BsFillPersonFill } from "react-icons/bs";

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <div className={styles.container}>
        <h1 className={styles.header}>Velkommen til Folkestemmen!</h1>
        <p className={styles.description}>
          Gi tilbakemelding og kom med innspill på spørsmål fra kommunen din{" "}
        </p>
        <Button primary>Logg inn</Button>
      </div>
    </div>
  );
};

export default Welcome;

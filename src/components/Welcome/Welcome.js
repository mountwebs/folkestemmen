import React from "react";
import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <div className={styles.content}>
        <h1>Velkommen til Folkestemmen!</h1>
        <div>
          Gi tilbakemelding og kom med innspill på spørsmål fra kommunen din{" "}
        </div>
      </div>
    </div>
  );
};

export default Welcome;

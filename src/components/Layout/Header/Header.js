import React from "react";
import styles from "./Header.module.css";
import logoFull from "../../../assets/logo-full.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img className={styles.logo} src={logoFull} />
      </div>
    </header>
  );
};

export default Header;

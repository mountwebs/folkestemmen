import React from "react";
import styles from "./Header.module.css";
import logoFull from "../../../assets/logo-full.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={logoFull} height="100px" width="100px" />
        {/* <Logo />
        <LogInButton /> */}
      </div>
    </header>
  );
};

export default Header;

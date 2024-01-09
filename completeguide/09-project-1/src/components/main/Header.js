import React, { useState } from "react";

//import "./Header.css";
import styles from "./Header.module.css";

import logo from "../../assets/investment-calculator-logo.png";

const Header = (props) => {
  return (
    <div>
      <header className={styles.header}>
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
    </div>
  );
};

export default Header;

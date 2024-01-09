import React, { useState } from "react";

//import "./CalculatorActions.css";
import styles from "./CalculatorActions.module.css";

const CalculatorActions = (props) => {
  return (
    <div>
      <p className={styles.actions}>
        <button
          type="reset"
          className={styles.buttonAlt}
          onClick={props.onReset}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </div>
  );
};

export default CalculatorActions;

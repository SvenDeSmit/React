import React, { useState } from "react";

import styles from "./ModalError.module.css";

import Card from "../Card";
import Button from "../Button";

const ModalError = (props) => {
  console.log("ERROR");

  return (
    <div>
      <div className={styles["modal-backdrop"]} onClick={props.onClose}></div>
      <div className={styles["modal-container"]}>
        <div className={styles["modal-title"]}>
          <h2>{props.title}</h2>
        </div>
        <div className={styles["error-msg"]}>
          <p>{props.message}</p>
        </div>
        <footer className={styles["modal-close"]}>
          <Button type="button" onClick={props.onClose}>
            Okay
          </Button>
        </footer>
      </div>
    </div>
  );
};

export default ModalError;

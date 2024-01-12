import React, { useState } from "react";
import ReactDOM from "react-dom";

import styles from "./ModalError.module.css";

import Card from "../Card";
import Button from "../Button";
import Wrapper from "../Wrapper";

// Kind of inner JSX Component
const Backdrop = (props) => {
  return (
    <div className={styles["modal-backdrop"]} onClick={props.onClose}></div>
  );
};

// Kind of inner JSX Component
const ModalOverlay = (props) => {
  return (
    <Card className={styles["modal-container"]}>
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
    </Card>
  );
};

const ModalError = (props) => {
  console.log("ERROR");
  console.log(props);

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose}></Backdrop>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClose={props.onClose}
        ></ModalOverlay>,
        document.getElementById("overlay-root")
      )}
      {/* <div className={styles["modal-backdrop"]} onClick={props.onClose}></div> */}
      {/* <Card className={styles["modal-container"]}>
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
      </Card> */}
    </React.Fragment>
  );
};

export default ModalError;

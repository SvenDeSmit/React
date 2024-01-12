import React, { useState, useRef } from "react";

import styles from "./UserInputForm.module.css";

import ModalError from "../errrors/ModalError";
import Card from "../Card";
import Button from "../Button";
import Wrapper from "../Wrapper";

const UserInputForm = (props) => {
  // const [username, setUsername] = useState("");
  // const [age, setAge] = useState("");

  // nameInputRef is a DOM object
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  // const inputChangeHandler = (id, value) => {
  //   console.log("change: " + id + " , " + value);
  //   if (id === "username") {
  //     setUsername(value);
  //   } else {
  //     setAge(value);
  //   }
  // };

  // STATE BASED SOLUTION
  // const addUserHandler = (event) => {
  //   // avoid page reload when the button is clicked
  //   event.preventDefault();
  //   console.log("Add User button clicked ...");
  //   if (username.trim().length === 0 || age.trim().length === 0) {
  //     console.log("ERROR");
  //     setError({
  //       title: "Invalid input",
  //       message: "Please enter a valid name and age (non-empty values)",
  //     });
  //     // } else if (Number(age.trim() < 0)) {
  //   } else if (+age < 0) {
  //     console.log("ERROR");
  //     setError({
  //       title: "Invalid input",
  //       message: "Please enter a valid age (> 0)",
  //     });
  //   } else {
  //     const userInput = {
  //       username: username,
  //       age: age,
  //     };
  //     props.onUserSubmit(userInput);
  //     setUsername("");
  //     setAge("");
  //   }
  // };

  // REFS BASED SOLUTION (as an alternative to state based)
  const addUserHandler = (event) => {
    // avoid page reload when the button is clicked
    event.preventDefault();

    // nameInputRef is a DOM object
    console.log(nameInputRef.current.value);
    console.log(ageInputRef.current.value);
    console.log("Add User button clicked ...");

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      console.log("ERROR");
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      // } else if (Number(age.trim() < 0)) {
    } else if (+enteredAge < 0) {
      console.log("ERROR");
      setError({
        title: "Invalid input",
        message: "Please enter a valid age (> 0)",
      });
    } else {
      const userInput = {
        username: enteredName,
        age: enteredAge,
      };
      props.onUserSubmit(userInput);
      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
      // setUsername("");
      // setAge("");
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    // <Wrapper>
    <React.Fragment>
      {error && (
        <ModalError
          title={error.title}
          message={error.message}
          onClose={errorHandler}
        ></ModalError>
      )}
      <Card>
        <form className={styles.form} onSubmit={addUserHandler}>
          <div>
            <p>
              <label>Username</label>
              <input
                type="text"
                id="username"
                // value={username}
                // onChange={(event) =>
                //   inputChangeHandler("username", event.target.value)
                // }
                ref={nameInputRef}
              />
            </p>
          </div>
          <div>
            <p>
              <label>Age (Years)</label>
              <input
                type="number"
                id="age"
                // value={age}
                // onChange={(event) =>
                //   inputChangeHandler("age", event.target.value)
                // }
                ref={ageInputRef}
              />
            </p>
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
    // </Wrapper>
  );
};

export default UserInputForm;

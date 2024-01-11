import React, { useState } from "react";

import styles from "./UserInputForm.module.css";

import ModalError from "../errrors/ModalError";
import Card from "../Card";
import Button from "../Button";

const UserInputForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const [error, setError] = useState();

  const inputChangeHandler = (id, value) => {
    console.log("change: " + id + " , " + value);
    if (id === "username") {
      setUsername(value);
    } else {
      setAge(value);
    }
  };

  const addUserHandler = (event) => {
    // avoid page reload when the button is clicked
    event.preventDefault();
    setUsername("");
    setAge("");
    console.log("Add User button clicked ...");
    if (username.trim().length === 0 || age.trim().length === 0) {
      console.log("ERROR");
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      // } else if (Number(age.trim() < 0)) {
    } else if (+age < 0) {
      console.log("ERROR");
      setError({
        title: "Invalid input",
        message: "Please enter a valid age (> 0)",
      });
    } else {
      const userInput = {
        username: username,
        age: age,
      };
      props.onUserSubmit(userInput);
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
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
                value={username}
                onChange={(event) =>
                  inputChangeHandler("username", event.target.value)
                }
              />
            </p>
          </div>
          <div>
            <p>
              <label>Age (Years)</label>
              <input
                type="number"
                id="age"
                value={age}
                onChange={(event) =>
                  inputChangeHandler("age", event.target.value)
                }
              />
            </p>
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserInputForm;

import React, { useState } from "react";
//import styled from "styled-components";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// STYLED COMPONENTS - to make class names globally unique => only apply to this component!
// NOT REALLY BEST PRACTICE!!!
// returns a function with button html
// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? "red" : "black")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//     background: ${(props) => (props.invalid ? "#f8baba" : "#transparent")};
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValidInput, setIsValidInput] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValidInput(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValidInput(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  // <div className={`form-control ${!isValidInput ? "invalid" : ""}`}>
  //   <label>Course Goal</label>
  //   <input type="text" onChange={goalInputChangeHandler} />
  // </div>

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={` ${styles["form-control"]} ${
          !isValidInput && styles.invalid
        }`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );

  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     <FormControl invalid={!isValidInput}>
  //       <label>Course Goal</label>
  //       <input type="text" onChange={goalInputChangeHandler} />
  //     </FormControl>
  //     <Button type="submit">Add Goal</Button>
  //   </form>
  // );
};

export default CourseInput;

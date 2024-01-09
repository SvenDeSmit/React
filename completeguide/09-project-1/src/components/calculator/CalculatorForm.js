import React, { useState } from "react";

// import "./CalculatorForm.css";
import styles from "./CalculatorForm.module.css";

import Header from "./CalculatorActions";
import CalculatorActions from "./CalculatorActions";

const CalculatorForm = (props) => {
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlyContribution, setYearlyContribution] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, SetDuration] = useState("");

  const inputChangeHandler = (id, value) => {
    console.log("change: " + id + " , " + value);

    if (id === "current-savings") {
      setCurrentSavings(value);
    } else if (id === "yearly-contribution") {
      setYearlyContribution(value);
    } else if (id === "expected-return") {
      setExpectedReturn(value);
    } else {
      SetDuration(value);
    }
  };

  const submitHandler = (event) => {
    // avoid page reload when the button is clicked
    event.preventDefault();
    console.log("Calculate button clicked ...");
    const investment = {
      currentSavings: currentSavings,
      yearlyContribution: yearlyContribution,
      expectedReturn: expectedReturn,
      duration: duration,
    };
    console.log("New investment calculated :");
    console.log(investment);
    props.onCalculate(investment);
  };

  const resetHandler = (event) => {
    console.log("Reset button clicked ...");
    setCurrentSavings("");
    setYearlyContribution("");
    setExpectedReturn("");
    SetDuration("");
  };

  return (
    <div>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              value={currentSavings}
              onChange={(event) =>
                inputChangeHandler("current-savings", event.target.value)
              }
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              value={yearlyContribution}
              onChange={(event) =>
                inputChangeHandler("yearly-contribution", event.target.value)
              }
            />
          </p>
        </div>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              value={expectedReturn}
              onChange={(event) =>
                inputChangeHandler("expected-return", event.target.value)
              }
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              value={duration}
              onChange={(event) =>
                inputChangeHandler("duration", event.target.value)
              }
            />
          </p>
        </div>
        <CalculatorActions
          onReset={(event) => {
            resetHandler(event);
            props.onReset(event);
          }}
        ></CalculatorActions>
      </form>
    </div>
  );
};

export default CalculatorForm;

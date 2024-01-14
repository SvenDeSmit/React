import React, { useState, useEffect, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";

// EVENT HANDLER
// NOT in component - does not need component state
// called whenever state of associated fields changes => recalculates the combined state object
// state = current (old) state
// action = dispatcher function - called by change handlers of the component - dispatch change EVENTS)
// RETURNS new state object (accesible via emailState)
const emailReducer = (state, action) => {
  console.log(state);
  console.log(action);
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_LOSTFOCUS") {
    return { value: state.value, isValid: state.value.includes("@") };
  }

  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  console.log(state);
  console.log(action);
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_LOSTFOCUS") {
    return { value: state.value, isValid: state.value.trim().length };
  }

  return { value: "", isValid: false };
};

const Login = (props) => {
  // AUTH CONTEXT COMPONENT "inject"
  const authCtx = useContext(AuthContext);

  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // dispatchEmail = > function that you must call when the state changes (of the concerned email fields)
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });
  const [passwordState, dispatchPwd] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });

  // DEFINE ALIASSES for valid fields in objects
  // emailIsValid is alias for emailState.isValid
  const { isValid: emailIsValid } = emailState;
  const { isValid: pwdIsValid } = passwordState;

  // EFFECT to calculate global isvalid
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("VALID FLAGS CHANGED");
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 500);
    return () => {
      console.log("Cleanup ...");
      clearTimeout(timeoutId); // cancels the currrent run => user types fast => function is not executed
      // user types fast =>
    }; // CLEANUP function - runs after first execution
  }, [emailIsValid, pwdIsValid]); // called if those vars change - ONLY when valid flags change!!!!

  // USE REDUCER - use when you have a lot of state with dependencies!
  // useEffect(() => {
  //   console.log("EFFECT");
  //   return () => {
  //     console.log("CLEANUP");
  //   };
  // }, [enteredPassword]);

  // USE EFFECT - be careful if you have a lot of state with dependencies! => use USE REDUCER instead!
  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     console.log("form changed");
  //     setFormIsValid(
  //       enteredEmail.includes("@") && enteredPassword.trim().length > 6
  //     );
  //   }, 500);
  //   return () => {
  //     console.log("Cleanup ...");
  //     clearTimeout(timeoutId); // cancels the currrent run => user types fast => function is not executed
  //     // user types fast =>
  //   }; // CLEANUP function - runs after first execution
  // }, [enteredEmail, enteredPassword]); // called if those vars change = with each keystroke!

  const emailChangeHandler = (event) => {
    // type = event type - object => action param in reducer function
    console.log("email value changed!");
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    setFormIsValid(
      event.target.value.includes("@") && passwordState.value.trim().length > 6
    );
    // setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    console.log("pwd value changed!");
    dispatchPwd({ type: "USER_INPUT", val: event.target.value });
    //setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && emailState.value.includes("@")
    );
  };

  const validateEmailHandler = () => {
    console.log("email field lost focus!");
    dispatchEmail({ type: "INPUT_LOSTFOCUS" });
    // setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    console.log("pwd field lost focus!");
    dispatchPwd({ type: "INPUT_LOSTFOCUS" });
    // setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler} // BLUR = lose focus
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.value === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

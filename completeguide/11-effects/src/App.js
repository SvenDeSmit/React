import React, { useState, useEffect, StrictMode } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Executes AFTER reload of all components!
  // Only runs if DEPENDENCIES have changed (second parameter)
  useEffect(() => {
    const userLoginInfo = localStorage.getItem("isLoggedIn");

    if (userLoginInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []); // [] = no dpendencies => only runs when app starts up

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "0");
  };

  /* Provider WRITES the context */
  /* value has default */
  /* all components & children have access (can listen to) to AuthContext component */
  return (
    // <React.Fragment>
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
    // </React.Fragment>
  );
}

export default App;

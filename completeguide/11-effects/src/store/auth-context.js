import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {}, // DUMMY function - but shows the "contract"
  onLogin: (email, password) => {}, // DUMMY function - but shows the "contract"
});

// This component also manages the state of the AuthContext (data + functions)
export const AuthContextProvider = (props) => {
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

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}{" "}
    </AuthContext.Provider>
  );
};

export default AuthContext;

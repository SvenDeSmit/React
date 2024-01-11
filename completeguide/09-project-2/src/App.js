import React, { useState } from "react";

import UserInputForm from "./components/userinput/UserInputForm";
import UserList from "./components/users/UserList";
function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (userInput) => {
    console.log(userInput);
    userInput.id = Math.random().toString();
    console.log(userInput.id);
    // setUsers([...users, userInput]);
    setUsers((prev) => {
      return [...prev, userInput];
    });
    console.log(users);
  };

  return (
    <div>
      <UserInputForm onUserSubmit={addUserHandler}></UserInputForm>
      <UserList users={users}></UserList>
    </div>
  );
}

export default App;

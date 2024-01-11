import React, { useState } from "react";

import styles from "./UserList.module.css";
import Card from "../Card";

const UserList = (props) => {
  return (
    <Card>
      <div className={styles.userlist}>
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              {user.username} ({user.age} years old)
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default UserList;

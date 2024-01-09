import React, { useState } from "react";

//import "./ResultHeader.css";
import styles from "./ResultHeader.module.css";

const ResultHeader = (props) => {
  return (
    <thead>
      <tr>
        <th>Year</th>
        <th>Total Savings</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
    </thead>
  );
};

export default ResultHeader;

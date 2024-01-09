import React, { useState } from "react";

//import "./ResultLine.css";
import styles from "./ResultLine.module.css";

const ResultLine = (props) => {
  console.log("Line created ...");
  console.log(props.lineData);
  return (
    <tr>
      <td>{props.lineData.year}</td>
      <td>
        $
        {props.lineData.totalSavings.toLocaleString("en-US", {
          maximumFractionDigits: 2,
        })}
      </td>
      <td>
        $
        {props.lineData.interestYear.toLocaleString("en-US", {
          maximumFractionDigits: 2,
        })}
      </td>
      <td>
        $
        {props.lineData.totalInterest.toLocaleString("en-US", {
          maximumFractionDigits: 2,
        })}
      </td>
      <td>
        $
        {props.lineData.investedCapital.toLocaleString("en-US", {
          maximumFractionDigits: 2,
        })}
      </td>
    </tr>
  );
};

export default ResultLine;

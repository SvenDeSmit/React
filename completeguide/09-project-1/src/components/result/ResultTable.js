import React, { useState } from "react";

//import "./ResultTable.css";
import styles from "./ResultTable.module.css";

import ResultHeader from "./ResultHeader";
import ResultLine from "./ResultLine";

const ResultTable = (props) => {
  console.log("Data updated in table :");
  console.log(props.yearlyData);
  console.log(props.userInput);

  let invested = Number(props.userInput.currentSavings);
  let totalInterest = 0;
  const lineArray = props.yearlyData.map((item) => {
    invested += item.yearlyContribution;
    totalInterest += item.yearlyInterest;
    const lineItem = {
      year: item.year,
      totalSavings: item.savingsEndOfYear,
      interestYear: item.yearlyInterest,
      totalInterest: totalInterest,
      investedCapital: invested,
    };

    return lineItem;
  });
  console.log(lineArray);

  if (lineArray.length <= 0) {
    console.log("no result data!");
    return <p>No investment calculated yet.</p>;
  }

  return (
    <div>
      <table className={styles.result}>
        <ResultHeader></ResultHeader>
        <tbody>
          {lineArray.map((yearLine) => (
            <ResultLine lineData={yearLine}></ResultLine>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;

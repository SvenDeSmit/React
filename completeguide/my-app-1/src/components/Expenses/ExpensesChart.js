import React from "react";

import Chart from "../Chart/Chart";
import Card from "../UI/Card";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
    console.log(expenseMonth);
    chartDataPoints[expenseMonth].value += expense.amount;
    console.log(
      chartDataPoints[expenseMonth].label +
        " : " +
        chartDataPoints[expenseMonth].value
    );
  }

  return (
    <Card className="expenses">
      <Chart dataPoints={chartDataPoints}></Chart>
    </Card>
  );
};

export default ExpensesChart;

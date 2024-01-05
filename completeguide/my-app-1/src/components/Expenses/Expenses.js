import React, { useState } from "react";

import "./Expenses.css";
//import ExpenseItem from "./ExpenseItem";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const items = props.items;
  console.log(items);

  const [yearFilter, setYearFilter] = useState("2020");
  // const [filterInfoText, setfilterInfoText] = useState("2019, 2021 & 2022");

  let filterInfoText = "2019, 2021 & 2022";
  const yearList = ["2019", "2020", "2021", "2022"];

  const calculateFilterYearString = (year) => {
    const filteredYearList = yearList.filter((year) => year != yearFilter);
    //console.log(filteredYearList);
    // array to string with separator ,
    let resText = filteredYearList.join(" , ");
    //console.log(resText);
    // replace last , by &
    var pos = resText.lastIndexOf(",");
    //console.log(pos);
    const arr = resText.split("");
    arr.splice(pos, 1, "&");
    resText = arr.join("");
    return resText;
  };

  filterInfoText = calculateFilterYearString(yearList);
  console.log(filterInfoText);

  const filteredExpenses = props.items.filter((expense) => {
    //console.log(items);
    //console.log(expense.date.getFullYear());
    //console.log(yearFilter);
    return expense.date.getFullYear() === Number(yearFilter);
  });

  const filterSelectionChangeHandler = (year) => {
    console.log(year);
    setYearFilter(year);
  };

  // let expensesContent = <p>No expenses found</p>;
  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       // always add key! Performance reasons. -> only updates curretn element (not all)
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     ></ExpenseItem>
  //   ));
  //}

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={yearFilter}
          onFilterSelectionChange={filterSelectionChangeHandler}
        ></ExpensesFilter>
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </li>
  );
}

export default Expenses;

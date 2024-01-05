import React, { useState } from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showAddButton, setShowAddButton] = useState(true);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setShowAddButton(true);
  };

  const buttonClickHandler = (event) => {
    // avoid page reload when the button is clicked
    event.preventDefault();
    console.log("Add New Expense button clicked");
    setShowAddButton(false);
  };

  const stopEditingHandler = () => {
    setShowAddButton(true);
  };

  // if (showAddButton) {
  //   return (
  //     <div className="new-expense">
  //       <button type="submit" onClick={buttonClickHandler}>
  //         Add New Expense
  //       </button>
  //     </div>
  //   );
  // }

  return (
    <div className="new-expense">
      {showAddButton && (
        <button type="submit" onClick={buttonClickHandler}>
          Add New Expense
        </button>
      )}
      {!showAddButton && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;

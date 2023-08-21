import React from "react";
import "./ExpenseTotal.css";

const ExpenseTotalImpl = ({ expenses }) => {
  return (
    <div className="expense-block">
      <span>{expenses}</span>
    </div>
  );
};

export const ExpenseTotal = React.memo(ExpenseTotalImpl);

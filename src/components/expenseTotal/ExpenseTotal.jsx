import React from "react";
import "./ExpenseTotal.css";

const ExpenseTotalImpl = () => {
  return (
    <div className="expense-block">
      <span>0</span>
    </div>
  );
};

export const ExpenseTotal = React.memo(ExpenseTotalImpl);

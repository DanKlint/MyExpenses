import React from "react";
import "./ExpenseTotal.css";

const ExpenseTotalImpl = ({ expenseTotal }) => {
  return (
    <div className="expense-block">
      <span>{expenseTotal}₽</span>
    </div>
  );
};

export const ExpenseTotal = React.memo(ExpenseTotalImpl);

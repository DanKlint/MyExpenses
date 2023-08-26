import React from "react";
import "./ExpenseTotal.css";

const ExpenseTotalImpl = ({ expenseTotal, onClick }) => {
  return (
    <div className="expense-block" onClick={onClick}>
      <span>{expenseTotal}₽</span>
    </div>
  );
};

export const ExpenseTotal = React.memo(ExpenseTotalImpl);

import React from "react";
import "./Budget.css";

const BudgetImpl = ({ budget, onClick }) => {
  return (
    <div className="budget-block" onClick={onClick}>
      <span>{budget}₽</span>
    </div>
  );
};

export const Budget = React.memo(BudgetImpl);

import React from "react";
import "./Budget.css";

const BudgetImpl = ({ budget }) => {
  return (
    <div className="budget-block">
      <span>{budget}₽</span>
    </div>
  );
};

export const Budget = React.memo(BudgetImpl);

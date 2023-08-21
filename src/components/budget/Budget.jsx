import React from "react";
import "./Budget.css";

const BudgetImpl = ({ income }) => {
  return (
    <div className="budget-block">
      <span>{income}</span>
    </div>
  );
};

export const Budget = React.memo(BudgetImpl);

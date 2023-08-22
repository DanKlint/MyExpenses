import React from "react";
import "./Budget.css";

const BudgetImpl = () => {
  return (
    <div className="budget-block">
      <span>0</span>
    </div>
  );
};

export const Budget = React.memo(BudgetImpl);

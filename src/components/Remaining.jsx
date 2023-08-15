import React from "react";
import "./Remaining.css";

const RemainingImpl = () => {
  return (
    <div className="remain-block">
      <span>Остаток: 1000₽</span>
    </div>
  );
};

export const Remaining = React.memo(RemainingImpl);

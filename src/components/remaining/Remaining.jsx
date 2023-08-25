import React from "react";
import "./Remaining.css";

const RemainingImpl = ({ remaining }) => {
  const remainingColor = remaining < 0 ? "negative-remaining" : "";

  return (
    <div className={`remain-block ${remainingColor}`}>
      <span>{remaining}₽</span>
    </div>
  );
};

export const Remaining = React.memo(RemainingImpl);

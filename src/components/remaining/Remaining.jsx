import React from "react";
import "./Remaining.css";

const RemainingImpl = ({ remaining }) => {
  return (
    <div className="remain-block">
      <span>{remaining}₽</span>
    </div>
  );
};

export const Remaining = React.memo(RemainingImpl);

import React from "react";
import "./Remaining.css";

const RemainingImpl = () => {
  return (
    <div className="remain-block">
      <span>0</span>
    </div>
  );
};

export const Remaining = React.memo(RemainingImpl);

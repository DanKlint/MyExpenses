import React from "react";
import "./ListItem.css";

const ListItemImpl = ({ description, amount }) => {
  return (
    <li className="list-item">
      {description}
      <div>
        <span className="amount">₽{amount}</span>
      </div>
    </li>
  );
};

export const ListItem = React.memo(ListItemImpl);

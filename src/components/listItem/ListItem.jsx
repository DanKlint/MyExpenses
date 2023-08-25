import React from "react";
import "./ListItem.css";

const ListItemImpl = ({ description, date, amount }) => {
  return (
    <li className="list-item">
      <div className="description">{description}</div>
      <div className="date">{date}</div>
      <div className="amount">{amount}₽</div>
    </li>
  );
};

export const ListItem = React.memo(ListItemImpl);

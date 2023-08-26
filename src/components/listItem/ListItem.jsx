import React from "react";
import "./ListItem.css";

const ListItemImpl = ({ description, date, amount }) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formattedDate = formatDate(date);

  return (
    <li className="list-item">
      <div className="description">{description}</div>
      <div className="date">{formattedDate}</div>
      <div className="amount">{amount}₽</div>
    </li>
  );
};

export const ListItem = React.memo(ListItemImpl);

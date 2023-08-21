import React from "react";

const ListItemImpl = ({ records }) => {
  return (
    <div>
      <h3>История</h3>
      <ul className="list">
        {records.map((record, index) => (
          <li key={index}>
            {record.description}: {record.type} {record.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const ListItem = React.memo(ListItemImpl);

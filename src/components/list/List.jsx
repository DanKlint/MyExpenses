import React from "react";
import { ListItem } from "../../components/listItem/ListItem";
import "./List.css";

const ListImpl = () => {
  return (
    <ul className="list">
      <ListItem />
    </ul>
  );
};

export const List = React.memo(ListImpl);

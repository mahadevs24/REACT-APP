import React, { Component } from "react";
const ListGroup = (props) => {
  const { items, valueProperty, textProperty, onItemSelect, selectedItem } =
    props;
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
          onClick={() => onItemSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  valueProperty: "_id",
  textProperty: "name",
};
export default ListGroup;

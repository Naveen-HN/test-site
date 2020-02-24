import React, { useState } from "react";
import uuid from "uuid/v1";
import ItemsForm from "./ItemsForm";

const ItemsList = () => {
  const [items, setItems] = useState([
    { name: "Cell Phone", id: 1 },
    { name: "Laptops", id: 2 },
    { name: "Tablets", id: 3 }
  ]);
  const addItem = name => {
    setItems([...items, { name, id: uuid() }]);
  };

  return (
    <div className="item-list">
      <ul>
        {items.map(item => {
          return <li key={item.id}> {item.name} </li>;
        })}
      </ul>
      <ItemsForm addItem={addItem} />
    </div>
  );
};

export default ItemsList;

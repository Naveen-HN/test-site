import React, { useState } from "react";

const ItemsForm = ({ addItem }) => {
  const [name, setName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addItem(name);
    setName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Item Name:</label>
      <input
        type="text"
        placeholder="Enter item here.."
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input type="submit" value="Add item" />
    </form>
  );
};

export default ItemsForm;

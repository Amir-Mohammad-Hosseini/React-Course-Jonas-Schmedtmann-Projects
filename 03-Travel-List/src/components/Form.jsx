import React, { useState } from "react";

const Form = ({ onAdd }) => {
  const [itemInput, setItemInput] = useState("");
  const [quantitySelect, setQuantitySelect] = useState(1);
  const handleChangeItem = (value) => {
    if (value.trim().length) {
      setItemInput(value);
    }
  };
  const handleAddNewItem = (event) => {
    event.preventDefault();
    const newItemDatas = {
      description: itemInput,
      quantity: quantitySelect,
      packed: false,
    };
    onAdd(newItemDatas);
    setItemInput("");
    setQuantitySelect(1);
  };
  return (
    <form className="add-form" onSubmit={handleAddNewItem}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantitySelect}
        onChange={(event) => setQuantitySelect(event.target.value)}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
      <input
        value={itemInput}
        onChange={(event) => handleChangeItem(event.target.value)}
        type="text"
        placeholder="Item..."
      />
      <button type="submit">ADD</button>
    </form>
  );
};

export default Form;

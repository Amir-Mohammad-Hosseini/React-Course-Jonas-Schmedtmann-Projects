import React, { useState } from "react";
import Item from "./Item";

const PackingList = ({ items, onDelete, onToggle , onClear }) => {
  const [sortBySelect, setSortBySelect] = useState("input");

  let sortedItems;
  switch (sortBySelect) {
    case "input":
      sortedItems = items;
      break;
    case "description":
      sortedItems = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
      break;
    case "packed":
      sortedItems = items.slice().sort((a, b) => Number(a.packed - b.packed));
      break;
    default:
      sortedItems = items;
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            {...item}
            onDeleteItem={onDelete}
            onToggleItem={onToggle}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBySelect} onChange={(event) => setSortBySelect(event.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClear}>Clear list</button>
      </div>
    </div>
  );
};

export default PackingList;

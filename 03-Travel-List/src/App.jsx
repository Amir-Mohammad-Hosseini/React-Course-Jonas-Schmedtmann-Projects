import { useEffect, useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  const [packingItems, setPackingItems] = useState(
    JSON.parse(localStorage.getItem("packingItems") || "[]"),
  );

  useEffect(() => {
    localStorage.setItem("packingItems", JSON.stringify(packingItems));
  }, [packingItems]);

  const itemsCount = packingItems.length
  const itemsPackedCount = packingItems.filter(item => item.packed).length
  const itemsPackedPercent = itemsPackedCount/ itemsCount * 100

  const handleAddNewItem = (itemDatas) => {
    setPackingItems((prevItems) => {
      return [...prevItems, { id: prevItems.length + 1, ...itemDatas }];
    });
  };
  const handleDeleteItem = (itemID) => {
    setPackingItems((prevItems) => {
      const unRemovedItems = [...prevItems].filter(
        (item) => item.id !== itemID,
      );
      return unRemovedItems;
    });
  };
  const handleToggleItem = (itemID) => {
    setPackingItems((prevItems) =>
      [...prevItems].map((item) =>
        item.id === itemID ? { ...item, packed: !item.packed } : item,
      ),
    );
  };
  const handleClearPackingItems = () => {
    if (packingItems.length){
          const confirmed = window.confirm("Are you sure you want to delete items?")
    if(confirmed){
      setPackingItems([])
    }
    }
  }
  return (
    <div className="app">
      <Logo />
      <Form onAdd={handleAddNewItem} />
      <PackingList
        items={packingItems}
        onDelete={handleDeleteItem}
        onToggle={handleToggleItem}
        onClear={handleClearPackingItems}
      />
      <Stats count={itemsCount} packedCount={itemsPackedCount} packedPercent={itemsPackedPercent} />
    </div>
  );
}

export default App;

import "./itemListContainer.css"
import { useState, useEffect } from 'react';
import Item from "../Item/Item";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemListContainer({ fetchData }) {
  const [items, setItems] = useState([]);
  const [showItemDetail, setShowItemDetail] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await fetchData();
      setItems(response);
    }

    getData();
  }, [fetchData]);

  function handleItemClick(item) {
    setSelectedItem(item);
    setShowItemDetail(true);
  }

  return (
    <div className="itemListContainer">
      {items.map((item) => (
        <Item key={item.key} item={item} onItemClick={() => handleItemClick(item)} />
      ))}
      {showItemDetail && <ItemDetail item={selectedItem} onClose={() => setShowItemDetail(false)} />}

    </div>
  );
}

export default ItemListContainer;

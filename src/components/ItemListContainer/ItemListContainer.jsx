import "./itemListContainer.css"
import { useState, useEffect } from 'react';
import Item from "../Item/Item";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';

function ItemListContainer({ fetchData }) {
  const [items, setItems] = useState([]);
  const [showItemDetail, setShowItemDetail] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const { category } = useParams();

  useEffect(() => {
    async function getData() {
      const response = await fetchData();
      if (category) {
        setItems(response.filter((item) => item.category === category));
      } else {
        setItems(response);
      }
    }

    getData();
  }, [category, fetchData]);

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


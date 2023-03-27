import "./itemListContainer.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Item from "../Item/Item";
import ItemDetail from "../ItemDetail/ItemDetail";


function ItemListContainer({ fetchData }) {
  const [items, setItems] = useState([]);
  const [showItemDetail, setShowItemDetail] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const { category, key } = useParams();

  useEffect(() => {
    async function fetchDataByCategory() {
      const response = await fetchData();
      const filteredItems = category ? response.filter(item => item.category === category) : response;
      setItems(filteredItems);
    }

    fetchDataByCategory();
  }, [category, fetchData]);

  useEffect(() => {
    function handleSelectedItem() {
      if (key) {
        const item = items.find(item => item.key === key);
        setSelectedItem(item);
        setShowItemDetail(true);
      } else {
        setShowItemDetail(false);
      }
    }

    handleSelectedItem();
  }, [key, items]);

  function handleItemClick(item) {
    setSelectedItem(item);
    setShowItemDetail(true);
  }

  return (
    <div className="itemListContainer">
      {items.map(item => (
        <Item key={item.key} item={item} onItemClick={() => handleItemClick(item)} />
      ))}
      {showItemDetail && selectedItem && (
        <Link to={`/item/${selectedItem.key}`} element={<ItemDetail item={selectedItem} fetchData={fetchData} />} />

      )}
    </div>
  );
}

export default ItemListContainer;

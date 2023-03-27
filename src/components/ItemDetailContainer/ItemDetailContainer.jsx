import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail/ItemDetail";

function ItemDetailContainer({ items }) {
  const { key } = useParams();
  const item = items.find((item) => item.key === key);

  return <ItemDetail item={item} />;
}

export default ItemDetailContainer;
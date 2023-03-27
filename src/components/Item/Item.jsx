import "./Item.css";
import { Link } from "react-router-dom";


function Item({ item }) {
  return (
    
    <div className="itemCard">
      <div>
        <img className="itemImagen" src={item.img} alt="imagen" />
        <h1 className="itemTitle">{item.title}</h1>
      </div>
      <h2 className="itemPrice">{item.price}</h2>
      <h3 className="itemDescrip">{item.descrip}</h3> 
      <Link to={`/item/${item.key}`} >
        <button className="itemButton">Ver Detalles</button>
      </Link>
   
    </div>
  );
}

export default Item;
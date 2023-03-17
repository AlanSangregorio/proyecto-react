import ItemCounter from "../ItemCounter/ItemCounter";
import "./Item.css";



function Item({ item }) {
 
    return (
      <div data-aos="fade-up" className="itemCard ">
        <div>
          <img className="itemImagen" src={item.img} alt="imagen" />
          <h1 className="itemTitle">{item.title}</h1>
        </div>
        <h2 className="itemPrice">{item.price}</h2>
        <h3 className="itemDescrip">{item.descrip}</h3> 
        <ItemCounter/> 
        <button className="itemButton">Agregar al carrito</button>          
      </div>
    );
  }

export default Item;
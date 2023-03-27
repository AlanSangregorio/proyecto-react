import "./itemDetail.css";
import ItemCounter from "../ItemCounter/ItemCounter";

function ItemDetail({ item, onClose }) { 
  return (
    <div className="itemDetailOverlay">
      <div className="itemDetailCard"> 
        <div className="itemDetailCloseButtonContainer">
          <button className="itemDetailCloseButton" onClick={onClose}>
            X
          </button>
        </div>
        <div>
          <img className="itemDetailImagen" src={item.img} alt="imagen" /> 
        </div>
        <h1 className="itemDetailTitle">{item.title}</h1> 
        <h2 className="itemDetailPrice">{item.price}</h2> 
        <h3 className="itemDetailDescrip">{item.descrip}</h3> 
        <div className="itemButtonContainer">         
          <ItemCounter/> 
          <button className="itemDetailButton">Agregar al carrito</button> 
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;

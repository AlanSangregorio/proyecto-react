import "./itemDetail.css";
import ItemCounter from "../ItemCounter/ItemCounter";
import { Link , } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";






function ItemDetail(props, onClose) {
  const [item, setItem] = useState([]);
  const { key } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await props.fetchData();
      const itemRequested = response.find((item) => item.key === key);
      setItem(itemRequested);
    }
    
    fetchData();
  }, [key, props]);

 
  
  
  return (
    <div className="itemDetailOverlay">
      <div className="itemDetailCard"> 
        <div className="itemDetailCloseButtonContainer">
          <Link to="/" className="itemDetailCloseButton" onClick={onClose}>
            X
          </Link>
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

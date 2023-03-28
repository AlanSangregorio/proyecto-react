import "./itemDetail.css";
import ItemCounter from "../ItemCounter/ItemCounter";
import { Link , } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import itemArray from "../../items";

function ItemDetail(props) {
  const [item, setItem] = useState({});
  const { key } = useParams();

  useEffect(() => {
    function fetchData(idURL) {      
      const promesa = new Promise((resolve) => {
        setTimeout(() => {
          const itemRequested = itemArray.find((item) => {
            return item.key === parseInt(idURL);              
          });
          
          setItem(itemRequested); 
          resolve(itemRequested);
        }, );
      });
      return promesa;
    }
    
    fetchData(key);
  }, [key, props]);
 
  

  return (
    <div className="itemDetailOverlay">
      <div className="itemDetailCard"> 
        <div className="itemDetailCloseButtonContainer">
          <Link to="/" className="itemDetailCloseButton">
            X
          </Link>
        </div>
        <div>
          <img className="itemDetailImagen" src={`/${item.img}`} alt="imagen" /> 
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

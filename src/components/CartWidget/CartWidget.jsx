import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.css";
import CartList from "../CartList/CartList";

function CartWidget() {
  const [showCartList, setShowCartList] = useState(false);
  const { items  } = useContext(CartContext); // Actualiza el acceso al contexto del carrito
  
  
  const handleCartClick = () => {
    setShowCartList(!showCartList);
  };
  

  return (
    <div className="cartWidget">
      <button className="cartWidgetButton" onClick={handleCartClick}>
        <img
          className="cartWidgetIcon"
          src="./CartWidget.png"
          alt="Carro de compras"
        />
        <span className="cartWidgetNoti">
          {items.reduce((total, item) => total + item.count, 0)}
        </span>
      </button>
      {showCartList && <CartList />}
    </div>
  );
}

export default CartWidget;

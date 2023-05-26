import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./cartList.css";
import { Link } from "react-router-dom";
import Checkout from "../Checkout/Checkout";

function CartList(items) {
  const cart = useContext(CartContext);
  const [visible, setVisible] = useState(true); // Estado local para controlar la visibilidad del componente

  // Suma total de los precios de los productos en el carrito
  const total = cart.items.reduce((accumulator, item) => {
    return accumulator + Number(item.price.slice(1)) * item.count;
  }, 0);

  // Función para ocultar el componente
  const handleClose = () => {
    setVisible(false);
  };

  // Renderizado condicional del componente basado en el estado "visible"
  if (!visible) {
    return null; // Retorna null para ocultar el componente
  }

  return (
    <>
      <ul className="cartContainer">
        <Link className="cartClose" to="/" onClick={handleClose}>
          X
        </Link>
        <div className="cartTitles">
          <div>PRODUCTO</div>
          <div>PRECIO</div>
          <div>CANTIDAD</div>
        </div>
        {cart.items.map((item) => (
          <div className="cartItem">
            <li key={item.key}>
              <div>{item.title}</div>
              <div>{item.price}</div>
              <div>{item.count}</div>   
                        
            </li>
            
          </div>
        ))}
        <div className="cartFooter">
          <div>TOTAL:</div>
          <div>${total}</div>
        </div>
        <Checkout items={cart.items} />
      </ul>
    </>
  );
}

export default CartList;

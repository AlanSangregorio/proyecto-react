import  { useContext, useState } from "react";
import "./ItemCounter.css";
import { CartContext } from "../../context/CartContext";




function ItemCounter({item}) {
 
  const [count, setCount] = useState(1);
  const { addItem } = useContext(CartContext); 
  
  
  const handleIncrement = () => {
    if (count < 100) {
      setCount(count + 1);
    }
  };
  
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  
  const handleAddItem = () => {
    addItem(item, count); // Actualiza la llamada a la función addItem del contexto del carrito
    setCount(1); // para reiniciar el contador después de agregar el item al carrito
    console.log(count);
    
  };
  
  return (
    <>
      <div className="itemCounter">
        <button onClick={handleDecrement}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <div className="itemButtonContainer">
        <button onClick={handleAddItem} className="itemDetailButton" >Agregar al carrito</button>
      </div>    
    </>  
  );
}

export default ItemCounter;
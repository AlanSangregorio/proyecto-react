import React, { useState } from "react";
import "./ItemCounter.css";

function ItemCounter(props) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 100) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="itemCounter">
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default ItemCounter;
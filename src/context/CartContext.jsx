import { createContext, useContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  addItem: () => {},
});

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item, count) => {
    const newItem = {
      ...item,
      count,
    };
    setItems([...items, newItem]);
  };

  return (
    <CartContext.Provider value={{ items, addItem }}>
      {children}
    </CartContext.Provider>
  );
};


import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
    useEffect(() => {
      fetch("http://localhost:3001/cart")
        .then((response) => response.json())
        .then((data) => {
          setCart(data);
        });
    }, []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function UseCart() {
  return useContext(CartContext);
}

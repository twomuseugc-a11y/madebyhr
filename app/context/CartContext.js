"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.id === product.id &&
          item.size === product.size &&
          item.fit === product.fit
      );

      if (existingIndex !== -1) {
        return prev.map((item, i) => {
          if (i === existingIndex) {
            if (item.quantity >= 5) return item;
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const increaseQty = (index) => {
    setCart((prev) =>
      prev.map((item, i) =>
        i === index && item.quantity < 5
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (index) => {
    setCart((prev) =>
      prev
        .map((item, i) =>
          i === index
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increaseQty, decreaseQty, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
};
import { createContext, useState } from "react";
import ApplianceData from "../Data/ApplianceData";
import FurnitureData from "../Data/FurnitureData";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const applianceCartProduct = ApplianceData.find((p) => {
      return p.id === Number(product);
    });
    const furnitureCartProduct = FurnitureData.find((p) => {
      return p.id === Number(product);
    });

    const existingProductIndex = cart.findIndex(
      (p) => p.id === Number(product)
    );
    if (existingProductIndex > -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex] =
        applianceCartProduct || furnitureCartProduct;
      setCart(updatedCart);
    } else {
      const newCartProduct = applianceCartProduct || furnitureCartProduct;
      setCart([...cart, newCartProduct]);
    }
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((p) => p.id !== Number(product));
    setCart(updatedCart);
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

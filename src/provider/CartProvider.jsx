import React, { createContext, useState, useEffect } from "react";
import { getProducts } from "../api/api";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const fetchProducts = async () => {
    const resp = await getProducts("https://dummyjson.com/products");
    setProducts(resp.products.map((item) => ({ ...item, addedToCart: false })));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <CartContext.Provider
      value={{ products, setProducts, cartItems, setCartItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

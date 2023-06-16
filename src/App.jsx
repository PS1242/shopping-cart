import { createContext, useEffect, useState } from "react";
import ProductsPage from "./ProductsPage/ProductsPage";
import Cart from "./Cart/Cart";
import "./App.css";

export const CartContext = createContext();

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const fetchProducts = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const resp = await data.json();
    setProducts(resp.products.map((item) => ({ ...item, addedToCart: false })));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <CartContext.Provider
        value={{ products, setProducts, cartItems, setCartItems }}
      >
        <div className="home-page">
          <div className="products-page">
            <ProductsPage />
          </div>
          <div className="cart-page">
            <Cart />
          </div>
        </div>
      </CartContext.Provider>
    </>
  );
}

export default App;

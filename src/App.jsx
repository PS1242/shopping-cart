import { createContext, useEffect, useState } from "react";
import ProductsPage from "./ProductsPage/ProductsPage";
import Cart from "./Cart/Cart";
import { getProducts } from "./api/api";
import "./App.css";

export const CartContext = createContext();

function App() {
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

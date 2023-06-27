import ProductsPage from "./products/ProductsPage";
import Cart from "./cart/Cart";
import "./App.css";
import CartProvider from "./provider/CartProvider";

function App() {
  return (
    <CartProvider>
      <div className="home-page">
        <div className="products-page">
          <ProductsPage />
        </div>
        <div className="cart-page">
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;

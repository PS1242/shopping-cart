import React from "react";
import { useContext } from "react";
import styles from "./Cart.module.css";
import { CartContext } from "../provider/CartProvider";
import CartItem from "./cartItem/CartItem";
import Total from "./total/Total";

function Cart() {
  const { cartItems, setCartItems, setProducts, products } =
    useContext(CartContext);

  const increaseQuantity = (id) => {
    const updatedData = cartItems.map((item) => ({
      ...item,
      quantity: item.id === id ? item.quantity + 1 : item.quantity,
    }));
    setCartItems(updatedData);
  };

  const decreaseQuantity = (id, quantity) => {
    // If quantity is only 1, remove this item from cart
    if (quantity === 1) {
      const updatedData = products.map((item) => ({
        ...item,
        addedToCart: item.id === id ? false : item.addedToCart,
      }));
      setProducts(updatedData);
      setCartItems((items) => items.filter((item) => item.id !== id));
    } else {
      const updatedData = cartItems.map((item) => ({
        ...item,
        quantity: item.id === id ? item.quantity - 1 : item.quantity,
      }));
      setCartItems(updatedData);
    }
  };

  return (
    <>
      <div className={styles.heading}>
        <h2>Cart</h2>
      </div>
      <div className={styles.cartItems}>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            data={item}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        ))}
      </div>
      <div className={styles.total}>
        <Total cartItems={cartItems} />
      </div>
    </>
  );
}

export default Cart;

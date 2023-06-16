import { useContext } from "react";
import { CartContext } from "../App";
import styles from "./Total.module.css";

function Total() {
  const { cartItems } = useContext(CartContext);
  const total = cartItems.reduce(
    (curr, next) => curr + next.quantity * next.price,
    0
  );

  return (
    <>
      {cartItems.length > 0 ? (
        <div className={styles.checkoutSection}>
          <p className={styles.totalText}>Total: {total}</p>
          <button className={styles.checkoutButton}>Checkout</button>
        </div>
      ) : (
        <p style={{ color: "#B48EAD" }}>Cart is empty</p>
      )}
    </>
  );
}

export default Total;

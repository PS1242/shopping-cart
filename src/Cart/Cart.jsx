import { useContext } from "react";
import styles from "./Cart.module.css";
import { CartContext } from "../App";
import CartItem from "./CartItem";
import Total from "./Total";

function Cart() {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <div className={styles.heading}>
        <h2>Cart</h2>
      </div>
      <div className={styles.cartItems}>
        {cartItems.map((item) => (
          <CartItem key={item.id} data={item} />
        ))}
      </div>
      <div className={styles.total}>
        <Total />
      </div>
    </>
  );
}

export default Cart;

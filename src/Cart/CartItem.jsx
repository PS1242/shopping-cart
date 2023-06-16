import { useContext } from "react";
import styles from "./CartItem.module.css";
import { CartContext } from "../App";

function CartItem({ data }) {
  const { cartItems, setCartItems, setProducts, products } =
    useContext(CartContext);

  const increaseQuantity = () => {
    const updatedData = cartItems.map((item) => ({
      ...item,
      quantity: item.id === data.id ? item.quantity + 1 : item.quantity,
    }));
    setCartItems(updatedData);
  };

  const decreaseQuantity = () => {
    // If quantity is only 1, remove this item from cart
    if (data.quantity === 1) {
      const updatedData = products.map((item) => ({
        ...item,
        addedToCart: item.id === data.id ? false : item.addedToCart,
      }));
      setProducts(updatedData);
      setCartItems((items) => items.filter((item) => item.id !== data.id));
    } else {
      const updatedData = cartItems.map((item) => ({
        ...item,
        quantity: item.id === data.id ? item.quantity - 1 : item.quantity,
      }));
      setCartItems(updatedData);
    }
  };

  return (
    <div className={styles.cartItemContainer}>
      <div className={styles.item}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={data.thumbnail} alt="item-image" />
        </div>
        <div className={styles.controls}>
          <button type="button" onClick={decreaseQuantity}>
            -
          </button>
          <p>{data.quantity}</p>
          <button type="button" onClick={increaseQuantity}>
            +
          </button>
        </div>
      </div>
      <div className={styles.details}>
        <p>Qty: {data.quantity}</p>
        <p>Price: {data.quantity * data.price}</p>
      </div>
    </div>
  );
}

export default CartItem;

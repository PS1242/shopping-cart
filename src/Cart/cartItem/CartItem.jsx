import React from "react";
import styles from "./CartItem.module.css";

function CartItem({ data, increaseQuantity, decreaseQuantity }) {
  return (
    <div className={styles.cartItemContainer}>
      <div className={styles.item}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={data.thumbnail}
            alt="item-image"
            data-testid="product-image"
          />
        </div>
        <div className={styles.controls}>
          <button
            type="button"
            onClick={() => decreaseQuantity(data.id, data.quantity)}
            data-testid="decrease-quantity-button"
          >
            -
          </button>
          <p data-testid="product-count">{data.quantity}</p>
          <button
            type="button"
            onClick={() => increaseQuantity(data.id)}
            data-testid="increase-quantity-button"
          >
            +
          </button>
        </div>
      </div>
      <div className={styles.details}>
        <p data-testid="product-quantity">Qty: {data.quantity}</p>
        <p data-testid="product-price">Price: {data.quantity * data.price}</p>
      </div>
    </div>
  );
}

export default CartItem;

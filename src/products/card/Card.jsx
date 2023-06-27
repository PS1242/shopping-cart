import React from "react";
import styles from "./Card.module.css";

function Card({ data, addToCart }) {
  return (
    <div className={styles.dataCard}>
      <div className={styles.imageContainer}>
        <img src={data.thumbnail} alt="" className={styles.productImage} />
      </div>
      <p className={styles.productTitle} data-testid="product-title">
        {data.title}
      </p>
      <p data-testid="product-price">${data.price}</p>
      <button
        type="button"
        className={styles.addToCartButton}
        style={{ backgroundColor: data.addedToCart ? "#A3BE8C" : "#5E81AC" }}
        onClick={() => addToCart(data)}
      >
        {data.addedToCart ? "Added" : "Add to cart"}
      </button>
    </div>
  );
}

export default Card;

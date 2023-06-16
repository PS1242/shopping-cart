import React, { useContext, useState } from "react";
import styles from "./Card.module.css";
import { CartContext } from "../../App";

function Card({ data }) {
  const { products, setCartItems, setProducts } = useContext(CartContext);

  const addToCart = (id) => {
    if (data.addedToCart) return;

    const updateData = products.map((item) => ({
      ...item,
      addedToCart: item.id === id ? true : item.addedToCart,
    }));
    setProducts(updateData);

    setCartItems((prev) => [
      ...prev,
      {
        id: data.id,
        title: data.title,
        price: data.price,
        quantity: 1,
        thumbnail: data.thumbnail,
      },
    ]);
  };

  return (
    <div className={styles.dataCard}>
      <div className={styles.imageContainer}>
        <img src={data.thumbnail} alt="" className={styles.productImage} />
      </div>
      <p className={styles.productTitle}>{data.title}</p>
      <p>${data.price}</p>
      <button
        type="button"
        className={styles.addToCartButton}
        style={{ backgroundColor: data.addedToCart ? "#A3BE8C" : "#5E81AC" }}
        onClick={() => addToCart(data.id)}
      >
        {data.addedToCart ? "Added" : "Add to cart"}
      </button>
    </div>
  );
}

export default Card;

import React from "react";
import styles from "./ProductsPage.module.css";
import ProductsList from "./productsList/ProductsList";

function ProductsPage() {
  return (
    <>
      <div className={styles.heading}>
        <h1>Products</h1>
      </div>
      <div className={styles.productsContainer}>
        <ProductsList />
      </div>
    </>
  );
}

export default ProductsPage;

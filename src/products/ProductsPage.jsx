import styles from "./ProductsPage.module.css";
import Products from "./Products";

function ProductsPage() {
  return (
    <>
      <div className={styles.heading}>
        <h1>Products</h1>
      </div>
      <div className={styles.productsContainer}>
        <Products />
      </div>
    </>
  );
}

export default ProductsPage;

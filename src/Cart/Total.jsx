import styles from "./Total.module.css";

function Total({ cartItems: data }) {
  const total = data.reduce(
    (curr, next) => curr + next.quantity * next.price,
    0
  );

  return (
    <>
      {data.length > 0 ? (
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

import styles from "./CartItem.module.css";

function CartItem({ data, increaseQuantity, decreaseQuantity }) {
  return (
    <div className={styles.cartItemContainer}>
      <div className={styles.item}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={data.thumbnail} alt="item-image" />
        </div>
        <div className={styles.controls}>
          <button
            type="button"
            onClick={() => decreaseQuantity(data.id, data.quantity)}
          >
            -
          </button>
          <p>{data.quantity}</p>
          <button type="button" onClick={() => increaseQuantity(data.id)}>
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

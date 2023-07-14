import styles from "./CartWidget.module.css";

const CartWidget = () => {
  const cartCount = 1; // Número de elementos en el carrito

  return (
    <div className={styles.cartContainer}>
      <img
        src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png"
        alt=""
        className={styles.cartImage}
      />
      {cartCount > 0 && <div className={styles.circle}>{cartCount}</div>}
    </div>
  );
};

export default CartWidget;

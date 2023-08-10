import { Link } from "react-router-dom";
import styles from "./CartWidget.module.css";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  let total = getTotalQuantity();
  return (
    <Link to="/ecommerce-project/cart">
      <div className={styles.cartContainer}>
        <img
          src="https://res.cloudinary.com/dog4ri0x9/image/upload/v1691597529/shopping-cart-svg-png-icon-download-28_t1ppur.png"
          alt=""
          className={styles.cartImage}
        />
        {total > 0 && (
          <div className={styles.circle}>
            <span>{total}</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default CartWidget;

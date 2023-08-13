/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import CounterContainer from "../../common/counter/CounterContainer";
import styles from "./ItemDetail.module.css";
import { DotLoader } from "react-spinners";

const ItemDetail = ({
  product,
  loading,
  loaderStyles,
  onAdd,
  totalQuantity,
}) => {
  return (
    <div className={styles.itemDetailContainer}>
      {loading ? (
        <div style={loaderStyles}>
          <DotLoader color="#b67484" size={80} />
        </div>
      ) : (
        <div className={styles.itemDetail}>
          <div className={styles.productImage}>
            <img src={product.image_link} alt={product.name} />
          </div>
          <div className={styles.productInfo}>
            <div className={styles.productName}>{product.name}</div>
            <div className={styles.productDescription}>{product.description}</div>
            <div className={styles.productPrice}>${product.price}</div>
            {(typeof totalQuantity === "undefined" ||
              product.stock > totalQuantity) &&
              product.stock > 0 && (
                <CounterContainer
                  stock={product.stock}
                  onAdd={onAdd}
                  initial={totalQuantity}
                />
              )}{" "}
            {product.stock === 0 && <h2>No hay stock</h2>}
            {typeof totalQuantity !== "undefined" &&
              totalQuantity === product.stock && (
                <h2>¡Ya tenés las máximas cantidades en el carrito!</h2>
              )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;

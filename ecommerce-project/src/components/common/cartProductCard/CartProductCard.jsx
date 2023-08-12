/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import styles from "./CartProductCard.module.css";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { IconButton } from "@mui/material";

const CartProductCard = ({ product }) => {
  const { deleteById } = useContext(CartContext);
  const { id, name, image_link, brand, price, quantity } = product;
  let precioTotalProd = quantity * price;

  return (
    <div className={styles.displays}>
      <div className={styles.cartColumn}>
        <div className={styles.productCol}>
          <div className={styles.productInfo}>
            <div className={styles.imgContainer}>
              <img src={image_link} alt="Foto del producto" />
            </div>
            <div className={styles.productDetail}>
              <h3>{name}</h3>
              <h4>{brand}</h4>
            </div>
          </div>
        </div>

        <div className={styles.productCol}>
          <h3>
            <span>{quantity}</span>
          </h3>
        </div>

        <div className={styles.productCol}>
          <h3>
            <span>${price}</span>
          </h3>
        </div>

        <div className={styles.productCol}>
          <h3>
            <span> ${precioTotalProd}</span>
          </h3>
        </div>
        <div className={styles.productCol}>
          <IconButton onClick={() => deleteById(id)} aria-label="clear">
            <ClearRoundedIcon
              sx={{ color: " #a3a3a3", fontSize: 45 }}
              fontSize="large"
            />
          </IconButton>
        </div>
      </div>
      <div className={styles.cartMobile}>
        <div className={styles.cartColumnMobile}>
          <div className={styles.productColMobile}>
            <div className={styles.productInfo}>
              <div className={styles.imgContainer}>
                <img src={image_link} alt="Foto del producto" />
              </div>
              <div className={styles.productDetail}>
                <h3>{name}</h3>
                <h4>{brand}</h4>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`${styles.productColMobile} ${styles.productColMobileDetail}`}
          >
            <h3>Cantidad:</h3>
            <span> {quantity}</span>
          </div>

          <div
            className={`${styles.productColMobile} ${styles.productColMobileDetail}`}
          >
            <h3>
            Precio Unitario:</h3>
            <span> ${price}</span>
          </div>

          <div
            className={`${styles.productColMobile} ${styles.productColMobileDetail}`}
          >
            <h3>Precio Total:</h3>
            <span> ${precioTotalProd}</span>
          </div>
        </div>
      </div>
      <div
        className={`${styles.productColMobile} ${styles.productColMobileClose}`}
      >
        <IconButton onClick={() => deleteById(id)} aria-label="clear">
          <ClearRoundedIcon
            sx={{ color: " #a3a3a3", fontSize: 45 }}
            fontSize="large"
          />
        </IconButton>
        <h4>Quitar del carrito</h4>
      </div>
      <div className={styles.bar}></div>
    </div>
  );
};

export default CartProductCard;

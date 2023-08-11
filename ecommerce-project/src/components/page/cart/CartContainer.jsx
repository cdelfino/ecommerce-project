import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import styles from "./CartContainer.module.css";
import { Link } from "react-router-dom";
import CartProductCard from "../../common/cartProductCard/CartProductCard";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import ShoppingCartCheckoutRoundedIcon from "@mui/icons-material/ShoppingCartCheckoutRounded";

const CartContainer = () => {
  const { cart, clearCart, getTotalPrice } = useContext(CartContext);

  let total = getTotalPrice();

  const clear = () => {
    Swal.fire({
      title: "¿Seguro que quieres limpiar tu carrito?",
      text: "¡Esta acción no se puede revertir!",
      icon: "warning",
      iconColor: "#ff646e",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      iconHtml: '<span style="color: #ff646e ;">!</span>',
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire(
          "¡Eliminado!",
          "Tu carrito se ha eliminado exitosamente.",
          "success"
        );
      }
    });
  };

  return (
    <div className={styles.cart}>
      <div className={styles.cartContainer}>
        <h1>Carrito de compras</h1>
        {cart.length === 0 ? (
          <p>Tu carrito está vacío</p>
        ) : (
          <div>
            <div className={styles.cartColumn}>
              <div className={styles.productCol}>
                <div className={styles.productInfo}>
                  <p>Producto</p>

                  <div className={styles.productDetail}></div>
                </div>
              </div>
              <div className={styles.productCol}>Cantidad </div>
              <div className={styles.productCol}>
                <p>Precio U.</p>
              </div>
              <div className={styles.productCol}>
                <p>Precio T.</p>
              </div>
            </div>
            <div className={styles.bar}></div>
            {cart.map((product) => (
              <div key={product.id}>
                <CartProductCard product={product} />
              </div>
            ))}
            <div className={styles.cartButtons}>
              <div>
                <button className={styles.clearCartButton} onClick={clear}>
                  <DeleteOutlineRoundedIcon fontSize={"small"} />
                  <p>Limpiar carrito</p>
                </button>
                <Link to="/ecommerce-project" className={styles.backButton}>
                  <ArrowBackIosRoundedIcon fontSize="small" />
                  Seguir comprando
                </Link>
              </div>

              <div className={styles.checkoutInfo}>
                <div className={styles.checkoutDetail}>
                  <h3>Subtotal:</h3>
                  <h3 className={styles.price}>${total}</h3>
                </div>
                <div className={styles.checkoutDetail}>
                  <h3>Envío:</h3>
                  <h3 className={styles.shipping}>$799</h3>
                </div>
                <div className={styles.bar}></div>
                <div className={styles.checkoutDetail}>
                  <h2>Total:</h2>
                  <h2 className={styles.price}>${total}</h2>
                </div>
                <Link
                  to="/ecommerce-project/checkout"
                  className={styles.purchaseButton}
                >
                  <ShoppingCartCheckoutRoundedIcon />
                  Finalizar compra
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartContainer;

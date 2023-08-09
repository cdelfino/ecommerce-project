import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import styles from "./CartContainer.module.css";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);

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
      iconHtml: '<span style="color: #ff646e ;">!</span>', // Estilo personalizado para el icono
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
    <div className={styles.cartContainer}>
      <h1>Carrito</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          {cart.map((product) => (
            <div key={product.id}>
              <h4>{product.name}</h4>
              <h5>{product.quantity}</h5>
              <button onClick={() => deleteById(product.id)}>Eliminar</button>
            </div>
          ))}
          <div>
            <button onClick={clear}>Limpiar carrito</button>
            <h2>El total es: ${total}</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default CartContainer;

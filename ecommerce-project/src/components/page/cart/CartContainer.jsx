import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import Cart from "./Cart";

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

  const dataProps = {
    clear,
    total,
    cart,
  };

  return <Cart {...dataProps} />;
};

export default CartContainer;

/* eslint-disable no-unused-vars */
import CounterContainer from "../../common/counter/CounterContainer";
import { products } from "../../../productsMock";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ItemDetail.module.css";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";

const ItemDetail = () => {
  const { addToCart, getQuantityById } = useContext(CartContext);

  const [product, setProduct] = useState({});
  const { id } = useParams();
  const totalQuantity = getQuantityById(id);

  useEffect(() => {
    let productoSeleccionado = products.find((item) => item.id === +id);
    const tarea = new Promise((res, rej) => {
      res(productoSeleccionado);
    });
    tarea.then((res) => setProduct(res));
  }, [id]);

  const onAdd = (cantidad) => {
    let productCart = { ...product, quantity: cantidad };
    addToCart(productCart);
    Swal.fire({
      icon: "success",
      text: "Producto agregado al carrito exitosamente",
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      iconColor: "#30a700",
    });
  };

  return (
    <div className={styles.itemDetailContainer}>
      <div className={styles.itemDetail}>
        <div className={styles.productImage}>
          <img src={product.image_link} alt={product.name} />
        </div>
        <div className={styles.productInfo}>
          <div className={styles.productName}>{product.name}</div>
          <div className={styles.productPrice}>${product.price}</div>
          <CounterContainer
            stock={product.stock}
            onAdd={onAdd}
            initial={totalQuantity}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

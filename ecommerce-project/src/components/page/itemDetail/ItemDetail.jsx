/* eslint-disable no-unused-vars */
import CounterContainer from "../../common/counter/CounterContainer";
import { products } from "../../../productsMock";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ItemDetail.module.css";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../../firebaseconfig";
import { getDoc, collection, doc } from "firebase/firestore";
import { DotLoader } from "react-spinners";

const ItemDetail = () => {
  const { addToCart, getQuantityById } = useContext(CartContext);

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true); 
  const loaderStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
  };
  const { id } = useParams();
  const totalQuantity = getQuantityById(id);

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let productRef = doc(productsCollection, id);

    getDoc(productRef)
      .then((res) => {
        setProduct({ ...res.data(), id: res.id });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener el producto:", error);
        setLoading(false);
      });
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
                <h2>tenes las maximas cantidades en el carrito</h2>
              )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;

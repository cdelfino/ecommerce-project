/* eslint-disable no-unused-vars */
import CounterContainer from "../../common/counter/CounterContainer";
import { products } from "../../../productsMock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ItemDetail.module.css";

const ItemDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let productoSeleccionado = products.find((item) => item.id === +id);
    const tarea = new Promise((res, rej) => {
      res(productoSeleccionado);
    });
    tarea.then((res) => setProduct(res));
  }, [id]);

  const onAdd = (cantidad) => {
    console.log(product);
    console.log(cantidad);
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
        <CounterContainer stock={product.stock} onAdd={onAdd} />
      </div>
    </div></div>
  );
};

export default ItemDetail;

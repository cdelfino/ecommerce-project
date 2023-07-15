/* eslint-disable no-unused-vars */
import CounterContainer from "../../common/counter/CounterContainer";
import { products } from "../../../productsMock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      <h2>{product.name}</h2>
      <h4>${product.price}</h4>
      <img src={product.image_link} alt={product.name} />
      <CounterContainer stock={product.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;

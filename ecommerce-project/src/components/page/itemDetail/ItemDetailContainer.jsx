/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../../firebaseconfig";
import { getDoc, collection, doc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
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
  
  const dataProps = {
    product,
    loaderStyles,
    loading,
    onAdd,
    totalQuantity,
  };
  return <ItemDetail {...dataProps} />;
};

export default ItemDetailContainer;

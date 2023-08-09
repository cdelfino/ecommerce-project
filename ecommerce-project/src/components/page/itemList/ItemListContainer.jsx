/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { DotLoader } from "react-spinners";

const loaderStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
};

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState({});

  const { categoryName } = useParams();

  useEffect(() => {
    let productsFiltrados = products.filter(
      (elemento) => elemento.category === categoryName
    );
    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName === undefined ? products : productsFiltrados);
      //   reject({message: "No autorizado", status: 401})
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => setError(error));
  }, [categoryName]);

  if (items.length === 0) {
    return (
      <div style={loaderStyles}>
        <DotLoader color="#b67484" size={80} />
      </div>
    );
  }

  return <ItemList items={items} />;
};

export default ItemListContainer;

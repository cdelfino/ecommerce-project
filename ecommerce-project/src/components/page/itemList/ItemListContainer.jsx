/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { DotLoader } from "react-spinners";
import { db } from "../../../firebaseconfig";
import { getDocs, collection, query, where } from "firebase/firestore";
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
    let productsCollection = collection(db, "products");
    let consulta;
    if (categoryName) {
      consulta = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    } else {
      consulta = productsCollection;
    }
    getDocs(consulta).then((res) => {
      let productos = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setItems(productos);
    });
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

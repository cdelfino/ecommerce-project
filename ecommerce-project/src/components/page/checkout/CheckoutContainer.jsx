import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./CheckoutContainer.module.css";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { Link } from "react-router-dom";

const CheckoutContainer = () => {
  const [orderId, setOrderId] = useState("");
  const { cart, getTotalPrice } = useContext(CartContext);

  let total = getTotalPrice();

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
    },

    onSubmit: (data) => {
      let order = { buyer: data, items: cart, total, date: serverTimestamp() };
      const ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

      cart.forEach((product) => {
        updateDoc(doc(db, "products", product.id), {
          stock: product.stock - product.quantity,
        });
      });
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required("Este campo es obligatorio.")
        .min(5, "El nombre debe tener al menos 5 caracteres.")
        .max(23, "El nombre debe tener menos de 23 caracteres."),
      phone: Yup.string()
        .required("Este campo es obligatorio.")
        .min(10, "Ingresa un número de teléfono valido (mínimo 10 caracteres)")
        .max(23, "Ingresa un número de teléfono valido (máximo 23 caracteres)"),

      email: Yup.string()
        .email("El email debe contener @")
        .required("Este campo es obligatorio."),
    }),
    validateOnChange: false,
  });

  return (
    <div className={styles.form}>
      <div className={styles.formContainer}>
        <h1>Checkout</h1>
        {orderId ? (
          <div>
            <h3>Gracias por su compra.</h3>
            <h4>Su numero de comprar es: {orderId}</h4>
            <Link to="/ecommerce-project">Volver a comprar</Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2>Datos de contacto</h2>
            <TextField
              type="text"
              label="Nombre"
              variant="outlined"
              error={errors.name ? true : false}
              name="name"
              onChange={handleChange}
              helperText={errors.name}
              className={styles.inputField}
            />{" "}
            <TextField
              type="phone"
              label="Teléfono celular"
              variant="outlined"
              error={errors.name ? true : false}
              name="phone"
              onChange={handleChange}
              helperText={errors.phone}
              className={styles.inputField}
            />
            <TextField
              type="text"
              label="Email"
              variant="outlined"
              error={errors.email ? true : false}
              name="email"
              onChange={handleChange}
              helperText={errors.email}
              className={styles.inputField}
            />
            <Button
              type="submit"
              variant="contained"
              className={styles.submitButton}
            >
              Comprar
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CheckoutContainer;

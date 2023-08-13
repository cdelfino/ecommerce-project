/* eslint-disable no-unused-vars */
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseconfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import Swal from "sweetalert2";
import Checkout from "./Checkout";

const CheckoutContainer = () => {
  const [orderId, setOrderId] = useState("");
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  let total = getTotalPrice();
  const popup = () => {
    let timerInterval;
    Swal.fire({
      title: "Procesando su compra...",
      html: "Esto solo tomará unos segundos.",
      timer: 2000,
      didOpen: () => {
        Swal.showLoading();
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    });
  };
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
    },

    onSubmit: (data) => {
      popup();
      let order = { buyer: data, items: cart, total, date: serverTimestamp() };
      const ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

      cart.forEach((product) => {
        updateDoc(doc(db, "products", product.id), {
          stock: product.stock - product.quantity,
        });
      });

      clearCart();

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
  const dataProps = {
    orderId,
    errors,
    handleSubmit,
    handleChange,
  };
  return <Checkout {...dataProps} />;
};

export default CheckoutContainer;

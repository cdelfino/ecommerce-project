/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import styles from "./CheckoutContainer.module.css";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

const Checkout = ({ orderId, errors, handleSubmit, handleChange }) => {
  const [confettiActive, setConfettiActive] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    if (orderId) {
      setConfettiActive(true);

      const timeout = setTimeout(() => {
        setConfettiActive(false);
      }, 6000);
      return () => clearTimeout(timeout);
    }
  }, [orderId]);

  return (
    <div className={styles.form}>
      <div className={styles.formContainer}>
        <h1>Checkout</h1>
        {orderId ? (
          <div className={styles.orderConfirmation}>
            <div>
              <img src="https://res.cloudinary.com/dog4ri0x9/image/upload/v1691779824/confeti_2_ghafgd.png"></img>
            </div>
            <div className={styles.textContainer}>
              <h1>¡Tu orden ha sido confirmada!</h1>
              <h2>Recibirás un mail con el detalle de tu compra.</h2>
              <h4>Tu número de orden es: {orderId}</h4>
            </div>
            <Link to="/ecommerce-project" className={styles.backButton}>
              <ArrowBackIosRoundedIcon fontSize="small" />
              Volver a comprar
            </Link>
            {confettiActive && (
              <Confetti
                className={styles.fadeOutAnimation}
                width={width}
                height={height}
              />
            )}
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
            />
            <TextField
              type="phone"
              label="Teléfono celular"
              variant="outlined"
              error={errors.phone ? true : false}
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

export default Checkout;

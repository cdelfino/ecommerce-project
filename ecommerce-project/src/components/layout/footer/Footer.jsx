/* eslint-disable no-unused-vars */
import styles from "./Footer.module.css";
import { Formik, Form, useFormik } from "formik";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";


const Footer = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      email: "",
    },

    onSubmit: (data) => {
      Swal.fire({
        icon: "success",
        text: "¡Te has suscrito al newsletter exitosamente!",
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        iconColor: "#30a700",
      });
      const subscriberInfo = {
        email: data.email,
        subscribedDate: new Date().toLocaleDateString(),
        company: "Essence",
      };
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("El email debe contener @")
        .required("Este campo es obligatorio."),
    }),
  });

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerColumn}>
          <div className={styles.footerLogo}>
            <Link to="/ecommerce-project/">
              <img
                src="https://res.cloudinary.com/dog4ri0x9/image/upload/v1686980951/logo_ojlcmn.png"
                width="210"
                alt="Logo"
              />
            </Link>
          </div>
          <div className={styles.footerText}>
            <p>
              Essence es una innovadora empresa de productos de belleza y
              cuidado personal que se destaca por su enfoque en la calidad, la
              creatividad y la accesibilidad.
            </p>
          </div>
          <div className={styles.footerSocialIcons}>
            <span>Síguenos en nuestras redes sociales</span>
            <div>
              <a href="">
                <FacebookRoundedIcon
                  fontSize="large"
                  sx={{ color: "#ffffff" }}
                />
              </a>
              <a href="">
                <PinterestIcon fontSize="large" sx={{ color: "#ffffff" }} />
              </a>
              <a href="">
                <LinkedInIcon fontSize="large" sx={{ color: "#ffffff" }} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerColumn}>
          <div className={styles.footerTitle}>
            <h3>Links</h3>
          </div>
          <div className={styles.columnList}>
            <ul className={styles.footerList}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">about</a>
              </li>
              <li>
                <a href="#">services</a>
              </li>
              <li>
                <a href="#">portfolio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <ul className={styles.footerList}>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Expert Team</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Latest News</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerColumn}>
          <div className={styles.footerTitle}>
            <h3>Suscríbete</h3>
          </div>
          <div className={styles.footerForm}>
            <Formik initialValues={{ email: "" }} onSubmit={handleSubmit}>
              <Form>
                <label htmlFor="">
                  No te pierdas de nuestro newsletter, suscríbete para recibir
                  descuentos y novedades.
                </label>
                <div className={styles.subscribe}>
                  <TextField
                    className={styles.subscribeInput}
                    InputLabelProps={{
                      style: { color: "#0E0E0E" },
                    }}
                    id="outlined-basic"
                    type="email"
                    name="email"
                    placeholder="Ingresa tu email"
                    helperText={errors.email}
                    error={errors.email ? true : false}
                  />
                  <Button className={styles.sendButton} type="submit">
                    <SendRoundedIcon fontSize="large" />
                  </Button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

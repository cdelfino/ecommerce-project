import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.css";
import { Formik, Form, Field } from "formik";
const Footer = () => {
  const handleSubmit = (values) => {
    // Aquí puedes implementar la lógica para manejar el envío del formulario
    console.log(values.email);
  };
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerColumn}>
        <div className={styles.footerLogo}></div>
        <div className={styles.footerText}></div>
        <div className={styles.footerSocialIcons}>
          <span>Siguenos</span>
          <FontAwesomeIcon icon={["fab", "github"]} />
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </div>
      </div>

      <div className={styles.footerColumn}>
        <div className={styles.footerTitle}>
          <h3>Links</h3>
        </div>
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
        <div className={styles.footerSocialIcons}>
          <span>Siguenos</span>
          <a href="">
            <i></i>
          </a>
          <a href=""></a>
          <a href=""></a>
        </div>
      </div>
      <div className={styles.footerColumn}>
        <div className={styles.footerTitle}>
          <h3>Links</h3>
        </div>
        <div className={styles.footerForm}>
          <Formik initialValues={{ email: "" }} onSubmit={handleSubmit}>
            <Form>
              <label htmlFor="">
                No te pierdas de nuestro newsletter, suscríbete para recibir
                descuentos y novedades.
              </label>
              <Field
                type="email"
                name="email"
                placeholder="Email Address"
                className="subscribe-input"
              />
              <button type="submit">
                <FontAwesomeIcon icon="fa-brands fa-telegram" />{" "}
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Footer;

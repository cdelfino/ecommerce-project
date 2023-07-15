import styles from "./Error404.module.css";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorMessage}>Error 404</h1>
      <p className={styles.errorDescription}>
        ¡Ups! La página que estás buscando no existe.
      </p>
      <Link to="/ecommerce-project" className={styles.backButton}>
        Volver a la página principal
      </Link>
    </div>
  );
};

export default Error404;

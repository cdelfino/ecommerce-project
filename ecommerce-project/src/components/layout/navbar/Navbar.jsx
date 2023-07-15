import CartWidget from "../../common/cartWidget/CartWidget";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.navContainer}>
        <div className={styles.brand}>
          <Link to="ecommerce-project/">
            <img
              src="https://res.cloudinary.com/dog4ri0x9/image/upload/v1686980951/logo_ojlcmn.png"
              width="210"
              alt="Logo"
            />
          </Link>
        </div>

        <div className={styles.navList}>
          <li className={styles.navListItem}>
            <Link to="ecommerce-project/" className={styles.navLink}>
              Todos
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link to="ecommerce-project/bases" className={styles.navLink}>
              Bases
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link to="ecommerce-project/sombras" className={styles.navLink}>
              Sombras
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link to="ecommerce-project/labiales" className={styles.navLink}>
              Labiales
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link
              to="/ecommerce-project/rubores"
              className={styles.navLink}
            >
              Rubores
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link to="ecommerce-project/bronzers" className={styles.navLink}>
              Bronzers
            </Link>
          </li>
        </div>
        <div className={styles.navListItem}>
          <Link to="#" className={styles.navLink}>
            <CartWidget />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// Navbar.jsx
import CartWidget from "../../common/cartWidget/CartWidget";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.navigation}>
      <div className={styles.navContainer}>
        <div className={styles.brand}>
          <Link to="/ecommerce-project/">
            <img
              src="https://res.cloudinary.com/dog4ri0x9/image/upload/v1686980951/logo_ojlcmn.png"
              width="210"
              alt="Logo"
            />
          </Link>
        </div>

        <div className={styles.navList}>
          <li className={styles.navListItem}>
            <button
              onClick={() => navigate("/ecommerce-project")}
              className={styles.navLink}
            >
              Todos
            </button>
          </li>
          <li className={styles.navListItem}>
            <button
              onClick={() => navigate("/ecommerce-project/category/bases")}
              className={styles.navLink}
            >
              Bases
            </button>
          </li>
          <li className={styles.navListItem}>
            <button
              onClick={() => navigate("/ecommerce-project/category/sombras")}
              className={styles.navLink}
            >
              Sombras
            </button>
          </li>
          <li className={styles.navListItem}>
            <button
              onClick={() => navigate("/ecommerce-project/category/labiales")}
              className={styles.navLink}
            >
              Labiales
            </button>
          </li>
          <li className={styles.navListItem}>
            <button
              onClick={() => navigate("/ecommerce-project/category/rubores")}
              className={styles.navLink}
            >
              Rubores
            </button>
          </li>
          <li className={styles.navListItem}>
            <button
              onClick={() => navigate("/ecommerce-project/category/bronzers")}
              className={styles.navLink}
            >
              Bronzers
            </button>
          </li>
        </div>

        <CartWidget className={styles.navLink} />
      </div>
    </div>
  );
};

export default Navbar;

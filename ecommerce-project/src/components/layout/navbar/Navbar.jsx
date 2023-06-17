import styles from "./Navbar.module.css";
import CartWidget from "../../common/cartWidget/CartWidget";

const Navbar = () => {
return (
  <div className={styles.navigation}>
    <div className={styles.navContainer}>
      <div className={styles.brand}>
        <img
          src="https://res.cloudinary.com/dog4ri0x9/image/upload/v1686980951/logo_ojlcmn.png"
          width="210"
          alt="Logo"
          style={{ zIndex: 1 }}
        />
      </div>
      <div>
        <nav className={styles.nav}>
          <div>
            <a href="#!">
              <span></span>
            </a>
          </div>
          <ul className={styles.navList}>
            <li className={styles.navListItem}>
              <a href="#!" className={styles.navLink}>
                Home
              </a>
            </li>
            <li className={styles.navListItem}>
              <a href="#!" className={styles.navLink}>
                Productos
              </a>
            </li>
            <li className={styles.navListItem}>
              <a href="#!" className={styles.navLink}>
                Contacto
              </a>
            </li>
            <li className={styles.navListItem}>
              <a href="#" className={styles.navLink}>
                <CartWidget />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
);
};
export default Navbar;

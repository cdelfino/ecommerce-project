/* eslint-disable react/prop-types */
import styles from "./Counter.module.css";

const Counter = ({ counter, restar, sumar, onAdd }) => {
  return (
    <div className={styles.counterContainer}>
      <div className={styles.counterSection}>
        <button className={styles.counterButton} onClick={restar}>
          -
        </button>
        <h3 className={styles.counterValue}>{counter}</h3>
        <button className={styles.counterButton} onClick={sumar}>
          +
        </button>
      </div>
      <div className={styles.counterSection}>
        <button className={styles.addButton} onClick={() => onAdd(counter)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};


export default Counter;

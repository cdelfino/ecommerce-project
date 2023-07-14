/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "./ProductCard.module.css";

const ProductCard = ({ item }) => {
  if (!item) {
    return null; 
  }
  const { id, name, image_link, brand, price, stock } = item;
  const brandFirstLetter = brand.charAt(0).toUpperCase();

  return (
    <a className={styles.productcard} href="#dolce-gabbana-cropped">
      <img className={styles.productcardimage} src={image_link} alt={name} />{" "}
      <div className={styles.productcardinfo}>
        <p className={styles.productcarddescription}>{name}</p>
        <p className={styles.productcardbrand}>{brandFirstLetter + brand.slice(1)}</p>
        <p className={styles.productcardprice}>${price}</p>
        <button className={styles.productcardbutton}>Ver detalle</button>
      </div>
    </a>
  );
};

export default ProductCard;

/* eslint-disable react/prop-types */
import styles from "./ItemList.module.css";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {items.map((item) => (
          <div className={styles.productCard} key={item.id}>
            {item.id && <ProductCard item={item} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;

/* eslint-disable react/prop-types */
import styles from "./ItemList.module.css";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  console.log("llego al presentacional los items: ", items);

  return (
    <div className={styles.hola}>
      <div className={styles.container}>
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

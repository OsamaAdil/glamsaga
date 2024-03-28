import ProductCard from "../ProductCard/ProductCard";
import styles from "./category.module.css";

export default function Category({ products, variables }) {
  const productMapping = products.map((item, index) => (
    <ProductCard key={index} product={item} />
  ));

  return (
    <>
      <div className={styles.heading}>
        {/* {variables.charAt(0).toUpperCase() + variables.slice(1)}
         */}
        {variables}
      </div>
      <div className={styles.productContainer}>{productMapping}</div>
    </>
  );
}

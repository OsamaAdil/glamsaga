import ProductCard from "../ProductCard/ProductCard";
import styles from "./category.module.css";

export default function Category({products}) {
  const productMapping = products.map((item, index) => (
    <ProductCard key={index} product={item} />
  ));

  return (
    <>
      <div className={styles.productContainer}>{productMapping}</div>
    </>
  );
}

import ProductCard from "../ProductCard/ProductCard";
import styles from "./category.module.css";

export default function Category({ products, variables }) {
  const productMapping = products.map((item, index) => (
    <ProductCard key={index} product={item} />
  ));

  const capital = variables?.charAt(0).toUpperCase() + variables?.slice(1);

  return (
    <>
      <div className={styles.heading}>{capital}</div>
      <div className={styles.productContainer}>{productMapping}</div>
    </>
  );
}

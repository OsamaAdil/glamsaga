import style from "./filterProduct.module.css";
import { useState, useEffect } from "react";
import { fetchProducts } from "../api";
import ProductCard from "../ProductCard/ProductCard";

export function FilterProduct({ type }) {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filteredArray = products.filter((product) =>
      product.Flag.includes(type)
    );
    setFilterProducts(filteredArray);
  }, [products, type]);

  
  if (products.length === 0) {
    return <div>Loading...</div>; 
  }

  return (
    <div className={style.productList}>
      {filterProducts.map((product, index) => (
        <ProductCard key={product._id} product={product} index={index} />
      ))}
    </div>
  );
}

import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { fetchProducts } from "@/components/api";
import styles from "./search.module.css";
import ProductCard from "@/components/ProductCard/ProductCard";

export default function Search() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);

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

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  const productMapping = filteredProducts.map((product, index) => (
    <ProductCard key={index} product={product} />
  ));

  return (
    <>
      <TextField
        label="Search products"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        InputLabelProps={{
          style: { fontSize: "14px" },
        }}
        InputProps={{
          className: styles.input,
          style: { fontSize: "16px" },
          placeholderStyle: { fontSize: "16px" },
        }}
        placeholder="Search products..."
        className={styles.search}
      />
      <div className={styles.filteredProducts}>{productMapping}</div>
    </>
  );
}

import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { fetchProducts } from "@/components/api";
import styles from "./search.module.css";
import ProductCard from "@/components/ProductCard/ProductCard";

export default function Search() {
    const [query, setQuery] = useState("");
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(10); // 

   
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
        const handleResize = () => {
            const width = window.innerWidth;
            if (width > 1200) {
                setProductsPerPage(10);
            } else if (width > 800) {
                setProductsPerPage(8);
            } else if (width > 600) {
                setProductsPerPage(6);
            } else {
                setProductsPerPage(4);
            }
        };
        handleResize(); 
        window.addEventListener("resize", handleResize);

      
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

   
    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
    );

   
    const indexOfLastProduct = currentPage * productsPerPage;

    
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

   
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    
    const handleNextPage = () => {
        if (currentPage < Math.ceil(filteredProducts.length / productsPerPage)) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

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
            <div className={styles.filteredProducts}>
                {currentProducts.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
            <div className={styles.pagination}>
                <Button
                    className={styles.buttonStyle}
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                >
                    Previous
                </Button>
                <span>Page {currentPage}</span>
                <Button
                    className={styles.buttonStyle}
                    onClick={handleNextPage}
                    disabled={currentPage === Math.ceil(filteredProducts.length / productsPerPage)}
                >
                    Next
                </Button>
            </div>
        </>
    );
}

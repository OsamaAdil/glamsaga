import React, { useState, useEffect } from "react";
import style from "./newArrivals.module.css";
import { fetchProducts, fetchCategories } from "@/components/api";
import ProductCard from "@/components/ProductCard/ProductCard";
import Filter from "@/components/Filter/Filter";

const NewArrivalsPage = () => {
  const [products, setProducts] = useState([]);
  const [filterType, setFilterType] = useState([]);
  const [filter, setFilter] = useState(null);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filteredArray = products.filter((product) =>
      product.Flag.includes("newarrivals")
    );
    setFilterType(filteredArray);
  }, [products]);

  const applyFilter = () => {
    if (!filter) {
      return filterType;
    }

    let filteredProducts = filterType;

    if (filter.category) {
      const filteredCategory = categories.filter(
        (item) => item.name === filter.category
      );

      const categoryID = filteredCategory[0]._id;
      console.log(categoryID);
      filteredProducts = filteredProducts.filter(
        (item) => item.categoryId === categoryID
      );
    }

    if (filter.price) {
      const [minPrice, maxPrice] = filter.price.split(" to ");
      filteredProducts = filteredProducts.filter((item) => {
        const itemPrice = parseFloat(item.price);
        return (
          itemPrice >= parseFloat(minPrice) && itemPrice <= parseFloat(maxPrice)
        );
      });
    }

    if (filter.discount) {
      filteredProducts = filteredProducts.filter(
        (item) => item.discountPercent >= filter.discount
      );
    }

    if (filter.rating) {
      filteredProducts = filteredProducts.filter(
        (item) => item.rating >= filter.rating
      );
    }

    return filteredProducts;
  };

  const handleFiltersChange = (selectedFilters) => {
    console.log(selectedFilters);
    setFilter(selectedFilters);
  };

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.container}>
      <div>
        <Filter onFiltersChange={handleFiltersChange} />
      </div>
      <div className={style.filterContainer}>
        <span>Best Sellers </span>
        <div className={style.filteredProductContainer}>
          <div className={style.productList}>
            {applyFilter().map((product, index) => (
              <ProductCard key={product._id} product={product} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalsPage;

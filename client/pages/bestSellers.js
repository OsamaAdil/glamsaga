import React, { useState, useEffect } from "react";
import style from "./newArrivals.module.css";
import { fetchProducts, fetchCategories } from "@/components/api";
import ProductCard from "@/components/ProductCard/ProductCard";
import Filter from "@/components/Filter/Filter";
import { useSelector, useDispatch } from "react-redux";

const BestSellers = () => {
  const [products, setProducts] = useState([]);
  const [filterType, setFilterType] = useState([]);
  const [filter, setFilter] = useState(null);
  const [categories, setCategories] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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
      product.flag.includes("bestsellers")
    );
    setFilterType(filteredArray);
  }, [products]);

  const applyFilter = () => {
    if (!filter) {
      return filterType;
    }

    let filteredProducts = filterType;

    if (filter.category) {
      const filteredCategory = categories.find(
        (item) => item.name === filter.category
      );
      const categoryID = filteredCategory?._id;
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
    setFilter(selectedFilters);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.container}>
      <div>
        {isFilterOpen && (
          <Filter
            onFiltersChange={handleFiltersChange}
            isFilterOpen={isFilterOpen}
            toggleFilter={toggleFilter}
          />
        )}
      </div>
      <div className={style.filterContainer}>
        <div className={style.span1} onClick={toggleFilter}>
          <span>Best Sellers </span>
          <img src="/filter.png" />
        </div>

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

export default BestSellers;

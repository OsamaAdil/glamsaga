import React, { useState } from "react";
import style from "./filter.module.css";

export default function Filter({ onFiltersChange }) {
  const categories = [
    "slings",
    "diaper Bags",
    "elegant hand Bags",
    "cool kids collection",
    "totes",
    "duffle bags",
    "clutches",
    "accessories",
    "fashion bag packs",
    "others",
  ];
  const prices = [
    "0 to  500",
    "500 to 1000",
    "1000 to 1500",
    "1500 to 2000",
    "more than 2000",
  ];
  const discounts = [10, 20, 30];
  const ratings = [4, 3, 2, 1];

  const [selectedFilters, setSelectedFilters] = useState({
    category: null,
    price: null,
    discount: null,
    rating: null,
  });

  const handleFilterChange = (type, value) => {
    const updatedFilters = { ...selectedFilters, [type]: value };
    setSelectedFilters(updatedFilters);
    onFiltersChange(updatedFilters);
  };
  // console.log(selectedFilters);

  const categoryFilter = categories.map((type, index) => (
    <div key={index} className={style.mainDiv}>
      <input
        type="radio"
        id={`category-${index}`}
        name="category"
        onChange={() => handleFilterChange("category", type)}
      />
      <label htmlFor={`category-${index}`}>{type}</label>
    </div>
  ));

  const priceFilter = prices.map((type, index) => (
    <div key={index} className={style.mainDiv}>
      <input
        type="radio"
        id={`price-${index}`}
        name="price"
        onChange={() => handleFilterChange("price", type)}
      />
      <label htmlFor={`price-${index}`}>{type}</label>
    </div>
  ));

  const discountFilter = discounts.map((type, index) => (
    <div key={index} className={style.mainDiv}>
      <input
        type="radio"
        id={`discount-${index}`}
        name="discount"
        onChange={() => handleFilterChange("discount", type)}
      />
      <label htmlFor={`discount-${index}`}>{type}% and above</label>
    </div>
  ));

  const ratingFilter = ratings.map((type, index) => (
    <div key={index} className={style.mainDiv}>
      <input
        type="radio"
        id={`rating-${index}`}
        name="rating"
        onChange={() => handleFilterChange("rating", type)}
      />
      <label htmlFor={`rating-${index}`}>
        {type}+<img src="/star.svg" alt={`star-${index}`} />
      </label>
    </div>
  ));

  return (
    <div className={style.container}>
      <span>Category</span>
      <div className={style.filter}>{categoryFilter}</div>
      <span>Price</span>
      <div className={style.filter}>{priceFilter}</div>
      <span>Discount</span>
      <div className={style.filter}>{discountFilter}</div>
      <span>Rating</span>
      <div className={style.filter}>{ratingFilter}</div>
    </div>
  );
}

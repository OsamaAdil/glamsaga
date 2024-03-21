import Filter from "@/components/Filter/Filter";
import { FilterProduct } from "@/components/FilterProduct.jsx/FilterProduct";
import React from "react";
import style from "./classicCollections.module.css";

const BestSellers = () => {
  return (
    <div className={style.container}>
      <div>
        <Filter />
      </div>
      <div className={style.filterContainer}>
        <span>Best Sellers</span>
        <div className={style.filteredProductContainer}>
          <FilterProduct type="bestsellers" />
        </div>
      </div>
    </div>
  );
};

export default BestSellers;

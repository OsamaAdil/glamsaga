import Filter from "@/components/Filter/Filter";
import { FilterProduct } from "@/components/FilterProduct.jsx/FilterProduct";
import React from "react";
import style from "./classicCollections.module.css";

const ClassicCollections = () => {
  return (
    <div className={style.container}>
      <div>
        <Filter />
      </div>
      <div className={style.filterContainer}>
        <span>Classic Collections</span>
        <div className={style.filteredProductContainer}>
          <FilterProduct type="Classic Collections" />
        </div>
      </div>
    </div>
  );
};

export default ClassicCollections;

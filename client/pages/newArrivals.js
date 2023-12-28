import Filter from "@/components/Filter/Filter";
import { FilterProduct } from "@/components/FilterProduct.jsx/FilterProduct";
import React from "react";
import style from './newArrivals.module.css';


const NewArrivalsPage = () => {
  return (
    <div className={style.container}>
      <div><Filter /></div>
      <div className={style.filterContainer}>
        <span >New Arrivals </span>
       <div className={style.filteredProductContainer}><FilterProduct type="New Arrival"/></div> 
    </div></div> 
  );
};

export default NewArrivalsPage;

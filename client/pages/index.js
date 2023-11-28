import React, { useEffect, useState } from "react";
import CardComponent from "../components/homePage/data";
// import Category from "@/components/homePage/category";
import Carousel from "../components/homePage/carousel";
// import { fetchProductDetails } from "@/services/product";
// import { fetchProductVariantsDetails } from "@/services/productVariants";
// import { fetchCategoryData } from "@/services/categoryData";


export default function Home() {
  return (
    <>
      <main >
      <>
            <Carousel />
            <CardComponent name="New Arrivals" url="newarrivals" data={newArrivalsData} />
            <CardComponent name="Classic Collection" url="classiccollections"  data={productsData} />
            <CardComponent name="Best Sellers" url="bestsellers" data={bestSellerData}  />
          </>
      </main>
    </>
  )
}

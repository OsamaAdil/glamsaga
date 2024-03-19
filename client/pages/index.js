import { Product } from "@/components/Product/Product";
import Carousel from "@/components/homePage/Carousel/Carousel";
import React, { useEffect, useState } from "react";
import style from "./index.module.css";
import Category from "@/components/homePage/Category/Category";
import Link from "next/link";
// import Category from "@/components/homePage/category/";

// import { fetchProductDetails } from "@/services/product";
// import { fetchProductVariantsDetails } from "@/services/productVariants";
// import { fetchCategoryData } from "@/services/categoryData";

export default function Home() {
  return (
    <>
      <Carousel />
      <div className={style.container}>
        <div className={style.flex}>
          <div className={style.headings}>New Arrivals</div>
          <div className={style.sideHeading}>
            <Link href="./newArrivals">View All</Link>
          </div>
        </div>
        <Product type="newarrivals" />
      </div>
      <div className={style.container}>
        <div className={style.flex}>
          <div className={style.headings}>Classic Collection</div>
          <div className={style.sideHeading}>
            <Link href="./classicCollections">View All</Link>
          </div>
        </div>
        <Product type="classiccollections" />
      </div>

      <div className={style.container}>
        <div className={style.flex}>
          <div className={style.headings}>
            <Link href="./bestSellers">Best Sellers</Link>
          </div>
          <div className={style.sideHeading}>View All</div>
        </div>
        <Product type="bestsellers" />
      </div>

      <div className={style.container}>
        <div className={style.headings}>Category</div>

        <div className={style.flex}>
          <Category image="/category_1.svg" name="Slings" />
          <Category image="/category_2.svg" name="Diaper Bags" />
          <Category image="/category_3.svg" name="Elegant Hand Bags" />
          <Category image="/category_4.svg" name="Cool Kids Collection" />
          <Category image="/category_5.svg" name="Totes" />
          <Category image="/category_6.svg" name="Duffle Bags" />
          <Category image="/category_7.svg" name="Clutches" />
          <Category image="/category_8.svg" name="Accessories" />
          <Category image="/category_9.svg" name="Fashion Bagpacks" />
          <Category image="/category_10.svg" name="Others" />
        </div>
      </div>

      <div className={style.paymentContainer}>
        <div>Secure checkout with</div>
        <div>
          <img src={"/payment.png"} />
        </div>
      </div>
      <a href="https://wa.me/918928033265" target="_blank">
        {" "}
        <div className={style.gifting}>
          <img className={style.gifting} src={"/corporategifting.png"} />
        </div>
      </a>
    </>
  );
}

// 
// powershell -ExecutionPolicy Bypass -File "C:\Users\Abdullah\AppData\Roaming\npm\json-server.ps1" --watch --port 4000 ./data/product.json
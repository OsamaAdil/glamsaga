import { Product } from "@/components/Product/Product";
import Carousel from "@/components/homePage/Carousel/Carousel";
import React, { useEffect, useState } from "react";
import style from "./index.module.css";
import Category from "@/components/homePage/Category/Category";
import Link from "next/link";
import { StyleRegistry } from "styled-jsx";
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
          <Link href="./bestSellers">
            <div className={style.sideHeading}>View All</div>
          </Link>
        </div>
        <Product type="bestsellers" />
      </div>

      <div className={style.container}>
        <div className={style.headings}>Category</div>

        <div className={style.flex1}>
          <Link href={`/categories/65f916a4ea52652270bc7af5`} passHref>
            {" "}
            <Category image="/category_1.svg" name="Slings" />{" "}
          </Link>
          <Link href={`/categories/65f916acea52652270bc7af6`} passHref>
            {" "}
            <Category image="/category_2.svg" name="Diaper Bags" />{" "}
          </Link>
          <Link href={`/categories/65f916bbea52652270bc7af7`} passHref>
            {" "}
            <Category image="/category_3.svg" name="Elegant Hand Bags" />{" "}
          </Link>
          <Link href={`/categories/65f916c7ea52652270bc7af8`} passHref>
            <Category image="/category_4.svg" name="Cool Kids Collection" />{" "}
          </Link>
          <Link href={`/categories/65f916d0ea52652270bc7af9`} passHref>
            <Category image="/category_5.svg" name="Totes" />{" "}
          </Link>
          <Link href={`/categories/65f916d9ea52652270bc7afa`} passHref>
            <Category image="/category_6.svg" name="Duffle Bags" />{" "}
          </Link>
          <Link href={`/categories/65f916e6ea52652270bc7afb`} passHref>
            {" "}
            <Category image="/category_7.svg" name="Clutches" />
          </Link>
          <Link href={`/categories/65f916efea52652270bc7afc`} passHref>
            {" "}
            <Category image="/category_8.svg" name="Accessories" />{" "}
          </Link>
          <Link href={`/categories/65f916f8ea52652270bc7afd`} passHref>
            <Category image="/category_9.svg" name="Fashion Bagpacks" />{" "}
          </Link>
          <Link href={`/categories/65f916ffea52652270bc7afe`} passHref>
            <Category image="/category_10.svg" name="Others" />
          </Link>
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
          <div className={style.giftHeading}>Corporate Gifting</div>
          <img src={"/corporategifting.png"} />
        </div>
      </a>
    </>
  );
}

//
// powershell -ExecutionPolicy Bypass -File "C:\Users\Abdullah\AppData\Roaming\npm\json-server.ps1" --watch --port 4000 ./data/product.json

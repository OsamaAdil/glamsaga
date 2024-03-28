// Header.js

import React, { useState, useEffect } from "react";
import style from "./header.module.css";
import Link from "next/link";
import Cart from "@/components/Cart/Cart";
import { useDispatch } from "react-redux";
import { onCartClick } from "@/redux/features/cartSlice";
import { useRouter } from "next/router";

export default function Header() {
  const [toggle, setToggle] = useState(true);
  const dispatch = useDispatch();
  const router = useRouter();
  let icon = toggle ? "/hamburger-menu-icon.webp" : "/cross.png";

  function handleClick() {
    setToggle(!toggle);
    const expandElement = document.getElementById("expand");
    if (window.innerWidth > 700 || toggle) {
      expandElement.style.display = "flex";
    } else {
      expandElement.style.display = "none";
    }
  }

  function handleCartClick() {
    dispatch(onCartClick());
  }

  return (
    <>
      <div className={style.header}>
        <div className={style.logo}>
          <Link href="/">
            <img className={style.logoImg} src={"/logo.svg"} alt="Logo" />
          </Link>
          <div className={style.toggler}>
            <img
              src={icon}
              className={style.image}
              alt="Toggle"
              onClick={handleClick}
            />
          </div>
        </div>
        <div className={style.middlebox} id="expand">
          <div
            className={style.tiles}
            onClick={(e) => {
              router.push(`/newArrivals`);
            }}
          >
            New Arrivals
          </div>
          <div
            className={style.tiles}
            onClick={(e) => {
              router.push(`/classicCollections`);
            }}
          >
            Classic Collections
          </div>
          <div
            className={style.tiles}
            onClick={(e) => {
              router.push(`/bestSellers`);
            }}
          >
            Best Sellers
          </div>
          <div
            className={style.tiles}
            onClick={(e) => {
              router.push(`/categories/65f916efea52652270bc7afc`);
            }}
          >
            Accessories
            </div>
          <div className={style.tiles} onClick={(e) => {
              router.push(`/contactUs`);
            }}>
            Contact us
          </div>
          <div className={style.cart} onClick={(e) => {
              router.push(`/search`);
            }}>
            
              <img src={"searchButton.png"} alt="Search" />
            
          </div>
          <div className={style.cart}>
            <img
              src={"Cart.png"}
              alt="Cart"
              id="cart"
              onClick={handleCartClick}
            />
          </div>
        </div>
      </div>
      <Cart />
    </>
  );
}

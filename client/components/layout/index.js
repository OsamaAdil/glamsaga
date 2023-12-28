import React from "react";
import { useState } from "react";
import Head from "next/head";
import Header from "./Header/Header";
// import Cart from "../globalComponents/cart";
// import Search from "../../pages/search";
import style from "./layout.module.css";
import Footer from "./footer/Footer";
// import Whatsapp from "../globalComponents/whatsapp";

const Layout = ({ children, Tag }) => {
  const [closeFlag, setCloseFlag] = useState(false);
  const [search, setSearch] = useState("");

  function handleClick() {
    document.getElementById("cart_bar").display = "none";
  }

  return (
    <>
      <Head>
        {Tag ? <title> {Tag} </title> : <title> Glam Saga </title>}
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header></Header>
      <div className={style.dummy}></div>

      {children}
      {/* {search ? <Search search={search} /> : <div> {children} </div>} */}
      {/* <Whatsapp /> */}
      {/* <Cart /> */}
      {/* {closeFlag ? <Login setCloseFlag={setCloseFlag} /> : false} */}
      <div className={style.whatsapp}>
        <a href="https://wa.me/918928033265" target="_blank">
          <img src="/whatsapp.png" />
        </a>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Layout;

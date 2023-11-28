import React from "react";
import { useState } from "react";
import Navbar from "./navbar";
import Head from "next/head";
import Footer from "./footer";
// import Cart from "../globalComponents/cart";
// import Search from "../../pages/search";
import styles from './layout.module.css';
// import Whatsapp from "../globalComponents/whatsapp";

const Layout = ({ children, Tag }) => {
  const [closeFlag, setCloseFlag] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <>
      <Head>
        {Tag ? <title> {Tag} </title> : <title> Iya - Think Bags </title>}
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar/>
      {/* {search ? <Search search={search} /> : <div> {children} </div>} */}
      {/* <Whatsapp /> */}
      {/* <Cart /> */}
      {/* {closeFlag ? <Login setCloseFlag={setCloseFlag} /> : false} */}
      <Footer />
    </>
  );
};

export default Layout;

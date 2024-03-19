import React, { useState } from "react";
import style from "./components.module.css";
import Router, { useRouter } from "next/router";

const genres = ["Edit", "Name", "Delete"];
const categories = ["Edit", "Name", "Delete"];
const products = ["Edit", "Name", "productId", "Details", "Delete"];
const productvariants = ["Edit", "productId", "Size", "Colour", "Delete"];
const comments = ["Edit", "productId", "userName", "postedOn", "comment", "rating", "Delete"];
const transactions = ["createdAt", "paymentMethod", "status", "product", "Product Variant", "item count", "totalProductsPrice", "shipping charges", "Delete"];
const customers = ["Edit", "Name", "Details", "Delete"];

let tableHeaderData = [];

const Table = ({data, handleEditButtonClick}) => {
  const router = useRouter();
  const linkText = router.pathname.split("/")[1];



  if(linkText == "genres") {
    tableHeaderData = genres
  }
  if(linkText == "categories") {
    tableHeaderData = categories
  }
  if(linkText == "products") {
    tableHeaderData = products
  }
  if(linkText == "productvariants") {
    tableHeaderData = productvariants
  }
  if(linkText == "comments") {
    tableHeaderData = comments
  }
  if(linkText == "transactions") {
    tableHeaderData = transactions
  }
  if(linkText == "customers") {
    tableHeaderData = customers
  }

  return (
    <>
      <div className={style.tablewrap}>
        <div className={style.scrollableTable}>
          <table className={style.table}>
            <thead>
              <tr className={style.tr}>
                {tableHeaderData?.map((el, i) => (
                  <th key={i} className={style.th}>
                    {el}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(linkText == "genres") && data
              ?.sort((a, b) => (b?.isDelete ? 1 : -1))
              ?.map((el, i) => (
                  <>
                    <tr key = {i}>
                    <div className={style.buttonContainer}>
                        <button className={style.buttonWrap} onClick={() => handleEditButtonClick(el._id, el)}>Edit</button>
                     </div>
                      <td className={style.td}>{el.name}</td>
                      <td className={style.td}>{el.isDelete.toString()}</td>
                    </tr>
                  </>
                ))
                } 
                {(linkText == "categories") && data
              ?.sort((a, b) => (b?.isDelete ? 1 : -1))
              ?.map((el, i) => (
                  <>
                    <tr key = {i}>
                          <div className={style.buttonContainer}>
                        <button className={style.buttonWrap} onClick={() => handleEditButtonClick(el._id, el)}>Edit</button>
                     </div>
                      <td className={style.td}>{el.name}</td>
                      <td className={style.td}>{el.isDelete.toString()}</td>
                    </tr>
                  </>
                ))
                } 
              {linkText == "products" && data?.map((el, i) => (
                  <>
                    <tr key = {i}>
                          <div className={style.buttonContainer}>
                        <button className={style.buttonWrap} onClick={() => handleEditButtonClick(el._id, el)}>Edit</button>
                     </div>
                      <td className={style.td}>{el.title}</td>
                      <td className={style.td}>{el._id}</td>
                      <td className={style.td}>{el.category}</td>
                      <td className={style.td}>{el.isDelete.toString()}</td>
                    </tr>
                  </>
                ))
                }
               {linkText == "productvariants" && data?.map((el, i) => (
                  <>
                    <tr key = {i}>
                          <div className={style.buttonContainer}>
                        <button className={style.buttonWrap} onClick={() => handleEditButtonClick(el._id, el)}>Edit</button>
                     </div>
                      <td className={style.td}>{el.productId}</td>
                      <td className={style.td}>{el.size}</td>
                      <td className={style.td}>{el.colour}</td>
                      <td className={style.td}>{el.isDelete.toString()}</td>
                    </tr>
                  </>
                ))
                }
                {linkText == "comments" && data?.map((el, i) => (
                  <>
                    <tr key = {i}>
                          <div className={style.buttonContainer}>
                        <button className={style.buttonWrap} onClick={() => handleEditButtonClick(el._id, el)}>Edit</button>
                     </div>
                      <td className={style.td}>{el.productId}</td>
                      <td className={style.td}>{el.userName}</td>
                      <td className={style.td}>{el.postedOn}</td>
                      <td className={style.td}>{el.comment}</td>
                      <td className={style.td}>{el.rating}</td>
                      <td className={style.td}>{el.isDelete.toString()}</td>
                    </tr>
                  </>
                ))
                }
                {linkText == "transactions" && data?.map((el, i) => (
                  <>
                    <tr key = {i}>
                      <td className={style.td}>{el.createdAt}</td>
                      <td className={style.td}>{el.paymentMethod}</td>
                      <td className={style.td}>{el.status}</td>
                      <td className={style.td}>{el.productDetails[0].productId}</td>
                      <td className={style.td}>{el.productDetails[0].productVariantId}</td>
                      <td className={style.td}>{el.productDetails[0].itemCount}</td>
                      <td className={style.td}>{el.totalProductsPrice}</td>
                      <td className={style.td}>{el.shippingCharges}</td>
                      <td className={style.td}>{el.isDelete.toString()}</td>
                    </tr>
                  </>
                ))
                }
                {linkText == "customers" && data?.map((el, i) => (
                  <>
                    <tr key = {i}>
                      <button className={style.td + ' ' + style.buttonWrap} onClick={() => handleEditButtonClick(el._id, el)}> Edit</button>
                      <td className={style.td}>{el.fullName}</td>
                      <td className={style.td}>{el.phoneNumber}</td>
                      <td className={style.td}>{el.isDelete.toString()}</td>
                    </tr>
                  </>
                ))
                }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;

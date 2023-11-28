import React, { useState } from "react";
import style from "./components.module.css";
import Router, { useRouter } from "next/router";

const genres = ["Edit", "Name", "Details", "Delete"];
const categories = ["Edit", "Name", "Details", "Delete"];
const products = ["Edit", "Name", "Details", "Delete"];
const productvariants = ["Edit", "Name", "Details", "Delete"];
const comments = ["Edit", "Name", "Details", "Delete"];
const transcations = ["Edit", "Name", "Details", "Delete"];
const customers = ["Edit", "Name", "Details", "Delete"];

let tableHeaderData = [];

const Table = ({data}) => {
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
  if(linkText == "transcations") {
    tableHeaderData = transcations
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
              {(linkText == "genres" || linkText == "categories") && data
              ?.sort((a, b) => (b?.isDelete ? 1 : -1))
              ?.map((el, i) => (
                  <>
                    <tr key = {i}>
                      <td className={style.td}>Edit</td>
                      <td className={style.td}>{el.name}</td>
                      <td className={style.td}>{}</td>
                      <td className={style.td}>{el.isDelete.toString()}</td>
                    </tr>
                  </>
                ))
                } 
              {linkText == "products" && data?.map((el, i) => (
                  <>
                    <tr key = {i}>
                      <td className={style.td}>Edit</td>
                      <td className={style.td}>{el.title}</td>
                      <td className={style.td}>{el.category}</td>
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

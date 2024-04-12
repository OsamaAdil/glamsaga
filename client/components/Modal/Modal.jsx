"use client";

import { useDispatch, useSelector } from "react-redux";

import styles from "./modal.module.css";
import ClientDetails from "./ClientDetails";

export default function Modal() {
  const toggle = useSelector((state) => state.cart.modalToggler);


  return (
    <div
      className={styles.mainContainer}
      style={{
        display: toggle ? "flex" : "none",
      }}
    >
      <ClientDetails />
    </div>
  );
}

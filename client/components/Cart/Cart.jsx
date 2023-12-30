// cart.js

import style from "./cart.module.css";
import { useState, useEffect, useCallback } from "react";

export default function Cart({ type, onToggleChange }) {
  const [cart, setCart] = useState([]);
  const [toggle, setToggle] = useState(type);
  const [, forceUpdate] = useState(); 

  const handleStorageChange = () => {
    const updatedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(updatedCart);
    forceUpdate({}); // Trigger re-render
  };

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [handleStorageChange]);

  useEffect(() => {
    setToggle(type);
  }, [type]);

  function handleClick1() {
    setToggle(!toggle);
    onToggleChange(!toggle);
  }

  function handleIncrement(item) {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  function handleDecrement(item) {
    if (item.quantity > 1) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  }

  function deletefromCart(item) {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  const cartItems = cart.map((item, index) => (
    <div key={index}>
      <div className={style.cartItemContainer}>
        <div>
          <img src="/bag.png" />
        </div>
        <div className={style.itemDescription}>
          {" "}
          <button onClick={() => handleDecrement(item)}>-</button>
          {item.quantity}
          <button onClick={() => handleIncrement(item)}>+</button> x{item.price}
          ={item.price * item.quantity}{" "}
          <img src="/trash.svg" onClick={() => deletefromCart(item)} />
        </div>
      </div>
      <div className={style.dummy1}></div>
    </div>
  ));

  const Total = cart.reduce(
    (accumulator, item) => accumulator + item.quantity * item.price,
    0
  );

  return (
    <div
      className={style.cartbar}
      id="cart_bar"
      style={{
        display: toggle ? "block" : "none",
      }}
    >
      <div className={style.flex}>
        <div> Your Shopping Cart </div>
        <div>
          <img
            src="/cross.png"
            className={style.crossImg}
            onClick={handleClick1}
          />
        </div>
      </div>
      <div className={style.dummy1}></div>
      <div className={style.cartItem}>{cartItems}</div>
      <div className={style.dummy1}></div>
      <div className={style.flex}>
        <div>Sub Total</div>
        <div>{Total}</div>
      </div>
      <div className={style.checkOut}>
        <button className={style.checkOutBtn}> Check Out</button>{" "}
      </div>
    </div>
  );
}

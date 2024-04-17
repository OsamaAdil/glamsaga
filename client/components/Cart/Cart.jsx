// cart.js

import style from "./cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  onCartClick,
  incrementCartItem,
  decrementCartItem,
  deleteCartItem,
  onCheckOut,
} from "@/redux/features/cartSlice";
import Link from "next/link";

export default function Cart() {
  const toggle = useSelector((state) => state.cart.cartToggler);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  function handleClick1() {
    dispatch(onCartClick());
  }

  function increment(index) {
    dispatch(incrementCartItem(index));
  }

  function decrement(index) {
    dispatch(decrementCartItem(index));
  }

  function deleteItem(item) {
    dispatch(deleteCartItem(item));
  }

  const Total = cart.reduce(
    (accumulator, item) =>
      accumulator +
      item.quantity * Math.round(item.price * (1 - item.discount / 100)),
    0
  );

  console.log(cart);

  const cartItems = cart.map((item, index) => (
    <div key={index}>
      <div className={style.cartItemContainer}>
        <div className={style.flex3}>
          <img src="/bag.png" />
        </div>
        <div className={style.itemDescription}>
          {" "}
          <div className={style.itemDescription}> {item.title}</div>
          <div>
            Size : {item.size} <br />
            Colour : {item.colour}
          </div>
          <div className={style.flex2}>
            <button className={style.incBtn} onClick={() => decrement(index)}>
              -
            </button>{" "}
            &nbsp;
            {item.quantity}&nbsp;
            <button className={style.incBtn} onClick={() => increment(index)}>
              +
            </button>{" "}
            &nbsp;
            {Math.round(item.price * (1 - item.discount / 100))}&nbsp;
            <span className={style.originalPrice}>{item.price}</span>{" "}
            <div className={style.trashImg}>
              <img src="/trash.svg" onClick={() => deleteItem(item)} />
            </div>
          </div>
        </div>
      </div>
      <div className={style.dummy1}></div>
    </div>
  ));

  function checkOut() {
    if (cart.length > 0) {
      dispatch(onCheckOut());
    } else {
      alert("Your cart is empty");
    }
  }

  return (
    <div
      className={style.cartbar}
      id="cart_bar"
      style={{
        display: toggle ? "block" : "none",
      }}
    >
      <div className={style.flex1}>
        <div>
          {" "}
          <span className={style.heading}>Your Shopping Cart</span>{" "}
        </div>
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

      <div className={style.flex1}>
        <div>Sub Total</div>
        <div>{Total}</div>
      </div>
      <div className={style.checkOut}>
        <button className={style.checkOutBtn} onClick={checkOut}>
          {" "}
          Check Out
        </button>{" "}
      </div>
    </div>
  );
}

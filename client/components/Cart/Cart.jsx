// cart.js

import style from "./cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  onCartClick,
  incrementCartItem,
  decrementCartItem,
  deleteCartItem,
} from "@/redux/features/cartSlice";

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
    (accumulator, item) => accumulator + item.quantity * item.price,
    0
  );

  const cartItems = cart.map((item, index) => (
    <div key={index}>
      <div className={style.cartItemContainer}>
        <div className={style.flex}>
          <img src="/bag.png" />
          <div className={style.itemDescription}> {item.title}</div>
        </div>
        <div className={style.itemDescription}>
          {" "}
          <button onClick={() => decrement(index)}>-</button> {item.quantity}{" "}
          <button onClick={() => increment(index)}>+</button> x{item.price}=
          {item.price * item.quantity}{" "}
          <img src="/trash.svg" onClick={() => deleteItem(item)} />
          <div>{item.size}</div>
        </div>
      </div>
      <div className={style.dummy1}></div>
    </div>
  ));

  //   const [cart, setCart] = useState([]);
  //   const [toggle, setToggle] = useState(type);
  //   const [, forceUpdate] = useState();

  //   const handleStorageChange = () => {
  //     const updatedCart = JSON.parse(localStorage.getItem("cart")) || [];
  //     setCart(updatedCart);
  //     forceUpdate({}); // Trigger re-render
  //   };

  //   useEffect(() => {
  //     const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
  //     setCart(savedCart);
  //     window.addEventListener("storage", handleStorageChange);
  //     return () => {
  //       window.removeEventListener("storage", handleStorageChange);
  //     };
  //   }, [handleStorageChange]);

  //   useEffect(() => {
  //     setToggle(type);
  //   }, [type]);

  //   function handleClick1() {
  //     setToggle(!toggle);
  //     onToggleChange(!toggle);
  //   }

  //   function handleIncrement(item) {
  //     const updatedCart = cart.map((cartItem) =>
  //       cartItem.id === item.id
  //         ? { ...cartItem, quantity: cartItem.quantity + 1 }
  //         : cartItem
  //     );
  //     setCart(updatedCart);
  //     localStorage.setItem("cart", JSON.stringify(updatedCart));
  //   }

  //   function handleDecrement(item) {
  //     if (item.quantity > 1) {
  //       const updatedCart = cart.map((cartItem) =>
  //         cartItem.id === item.id
  //           ? { ...cartItem, quantity: cartItem.quantity - 1 }
  //           : cartItem
  //       );
  //       setCart(updatedCart);
  //       localStorage.setItem("cart", JSON.stringify(updatedCart));
  //     }
  //   }

  //   function deletefromCart(item) {
  //     const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);

  //     setCart(updatedCart);
  //     localStorage.setItem("cart", JSON.stringify(updatedCart));
  //   }

  // const cartItems = cart.map((item, index) => (
  //   <div key={index}>
  //     <div className={style.cartItemContainer}>
  //       <div>
  //         <img src="/bag.png" />
  //       </div>
  //       <div className={style.itemDescription}>
  //         {" "}
  //         <button onClick={() => handleDecrement(item)}>-</button>
  //         {item.quantity}
  //         <button onClick={() => handleIncrement(item)}>+</button> x{item.price}
  //         ={item.price * item.quantity}{" "}
  //         <img src="/trash.svg" onClick={() => deletefromCart(item)} />
  //       </div>
  //     </div>
  //     <div className={style.dummy1}></div>
  //   </div>
  // ));

  // ;

  return (
    <div
      className={style.cartbar}
      id="cart_bar"
      style={{
        display: toggle ? "block" : "none",
      }}
    >
      <div className={style.flex1}>
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

import React, { useState } from "react";
import style from "../components/login/login.module.css";
import Head from "next/head";
import Router, { useRouter } from "next/router";

export default function Home() {

  const router = useRouter();
  const linkText = router.pathname.split("/")[1];

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleLogin = () => {
    const checkCredential = async (user) => {
      router.push("/genres");
      try {
        if (response?.data?.token) {
          var token = response?.data?.token;
          localStorage.setItem("token", JSON.stringify(token));
        }
      } catch (error) {
        console.error("Error in checking credentials", error);
      }
    };
    checkCredential(user);
  };

  return (
    <>
      <main>
        <div className={style.mainWrap}>
          <div className={style.logo}> </div>
          <div className={style.loginWrap}>
            <div className={style.text}>Login</div>
            <input
              type="email"
              className={style.input}
              placeholder="Enter your email"
              value={user.email}
              onChange={(e) => {
                let tempObject = { ...user };
                tempObject.email = e?.target?.value;
                setUser(tempObject);
              }}
            ></input>
            <input
              type="password"
              value={user.password}
              onChange={(e) => {
                let tempObject = { ...user };
                tempObject.password = e?.target?.value;
                setUser(tempObject);
              }}
              className={style.input}
              placeholder="Enter your password"
            ></input>
            <div>
              <button onClick={() => handleLogin()} className={style.button}>
                <div className={style.linktext}> Login </div>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

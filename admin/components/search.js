import React from "react";
import style from "./components.module.css";
import Button from "../components/button"

const search = ({ query, handleChange }) => {
  return (
    <>
      <div className={style.searchWrap}>
       
          <input
            placeholder="Search"
            className={style.input}
            type="text"
            // value={query.name}
            // onChange={handleChange}
          ></input>
          <Button text = "Go" />
      
      </div>
    </>
  );
};

export default search;

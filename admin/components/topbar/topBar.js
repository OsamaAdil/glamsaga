import React from "react";
import style from "./topbar.module.css";
import Button from "../../components/button";
import Search from "../../components/search";

const topBar = ({ title }) => {
  function capitalizeFirstLetter(text) {
    const [firstLetter, ...rest] = text;
    return firstLetter.toUpperCase() + rest.join("");
  }

  const capitalizedTitle = capitalizeFirstLetter(title);

  return (
    <>
      <div className={style.mainwrap}>{capitalizedTitle}</div>
      <div className={style.line}> </div>
      {/* <Button text="Create" /> */}
      {/* <Search /> */}
    </>
  );
};

export default topBar;

import React, { useState } from "react";
import style from "../components.module.css";

const genreCreate = ({flagCreateGenre, setFlagCreateGenre}) => {

  const [tempGenreData, setTempGenreData] = useState({
    genreId: "",
    name: "",
    isDelete: ""
  });

  return (
    <>
      <div className={style.inputWrap}>
        <div>
          <div>Name:</div>
          <input
            placeholder="Enter Name"
            className={style.input}
            type="text"
            value={tempGenreData.name}
            onChange={() => handleChange()}
          ></input>
        </div>
        <button className="buttonWrap">Create</button>
      </div>
    </>
  );
};

export default genreCreate;

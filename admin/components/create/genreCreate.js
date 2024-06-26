import React, { useState } from "react";
import style from "../components.module.css";

const genreCreate = ({ tempData, setTempData, flagCreate, setFlagCreate, onCreateNew, handleSubmit, handleCancel, handleChange }) => {

  return (
    <>
      <div className={style.inputWrap}>
        <div>
          <div>Name:</div>
          <input
            placeholder="Enter Name"
            className={style.input}
            type="text"
            name="name"
            value={tempData.name}
            onChange={(event) => handleChange(event)}
          ></input>
        </div>
        <div>
          <button className="buttonWrap" onClick={handleSubmit}>Create</button>
          <button className="buttonWrap" onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </>
  );
};

export default genreCreate;

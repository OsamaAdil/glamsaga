import React, { useState } from "react";
import style from "../components.module.css";

import Dropdown from "../dropdown";

const commentCreate = ({
  tempData,
  setTempData,
  flagCreate,
  setFlagCreate,
  onCreateNew,
  selectedProductId,
  optionsProduct,
  handleSubmit, 
  handleCancel,
  handleChange

}) => {


  return (
    <>
      <div className={style.inputWrap}>
        <div id="scrollable-select-wrapper">
          <div>Choose Product:</div>
          <Dropdown
            key={selectedProductId}
            options={optionsProduct}
            value={selectedProductId}
            handleChange={handleChange}
            placeholderText="Select a Product"
            name = "productId"
            editFlag={true}
          />
        </div>
        <div>
          <div>userName:</div>
          <input
            placeholder="Enter User Name"
            className={style.input}
            type="text"
            name="userName"
            value={tempData.userName}
            onChange={(event) => handleChange(event)}
          ></input>
        </div>
        <div>
          <div>postedOn:</div>
          <input
            placeholder="Enter postedOn"
            className={style.input}
            type="date"
            name="postedOn"
            value={tempData.postedOn}
            onChange={(event) => handleChange(event)}
          ></input>
        </div>
        <div>
          <div>comment:</div>
          <input
            placeholder="Enter comment"
            className={style.input}
            type="text"
            name="comment"
            value={tempData.comment}
            onChange={(event) => handleChange(event)}
          ></input>
        </div>
        <div>
          <div>rating:</div>
          <input
            placeholder="Enter rating"
            className={style.input}
            type="text"
            name="rating"
            value={tempData.rating}
            onChange={(event) => handleChange(event)}
          ></input>
        </div>
        <div>
          <button className="buttonWrap" onClick={handleSubmit}>
            Create
          </button>
          <button className="buttonWrap" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default commentCreate;

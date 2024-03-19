import React, { useState } from "react";
import style from "../components.module.css";

import Dropdown from "../dropdown";

const productVariantCreate  = ({
  tempData,
  setTempData,
  flagCreate,
  setFlagCreate,
  onCreateNew,
  selectedGenreId,
  optionsGenre,
  selectedCategoryId,
  optionsCategory,
  handleSubmit,
  handleEdit,
  handleCancel,
  handleChange,
  handleAddImage,
  handleRemoveImage, 
  handleImageUpdate,
  selectedProductId,
  optionsProduct,
  optionsDelete
}) => {


  return (
    <>
      <div className={style.inputWrap}>
        <div id="scrollable-select-wrapper">
          <div>Choose Product:</div>
          <Dropdown
            key={selectedProductId}
            options={optionsProduct}
            value={tempData.productId}
            handleChange={handleChange}
            placeholderText="Select a Product"
            name = "productId"
            editFlag={true}
          />
        </div>
        <div>
          <div>size:</div>
          <input
            placeholder="Enter Size"
            className={style.input}
            type="text"
            name="size"
            value={tempData.size}
            onChange={(event) => handleChange(event)}
          ></input>
        </div>
        <div>
          <div>colour:</div>
          <input
            placeholder="Enter colour"
            className={style.input}
            type="text"
            name="colour"
            value={tempData.colour}
            onChange={(event) => handleChange(event)}
          ></input>
        </div>
        <div>
          <div>length:</div>
          <input
            placeholder="Enter length"
            className={style.input}
            type="text"
            name="length"
            value={tempData.length}
            onChange={(event) => handleChange(event)}
          ></input>
        </div>
        <div>
          <div>width:</div>
          <input
            placeholder="Enter width"
            className={style.input}
            type="text"
            name="width"
            value={tempData.width}
            onChange={(event) => handleChange(event)}
          ></input>
        </div>
        <div>
          <div>height:</div>
          <input
            placeholder="Enter height"
            className={style.input}
            type="text"
            name="height"
            value={tempData.height}
            onChange={(event) => handleChange(event)}
          ></input>
        </div>
        <div> 
          Delete Option:
          <Dropdown
            name="isDelete"
            options={optionsDelete}
            value={tempData.isDelete}
            handleChange={handleChange}
            placeholderText="Select Delete Option"
            editFlag={true}
          />
        </div>
        <div>
          <button className="buttonWrap" onClick={handleEdit}>
            Edit
          </button>
          <button className="buttonWrap" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default productVariantCreate;

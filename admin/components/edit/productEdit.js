import React, { useState } from "react";
import style from "../components.module.css";

import Dropdown from "../dropdown";

const productEdit = ({
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
  optionsDelete,
  optionsFlag
}) => {
  const inputData = [
    { name: "title", label: "Title", type: "text" },
    { name: "price", label: "Price", type: "text" },
    { name: "discountPercent", label: "Discount Percent", type: "text" },
    { name: "material", label: "Material", type: "text" },
    { name: "pattern", label: "Pattern", type: "text" },
    { name: "type", label: "Type", type: "text" },
    { name: "occasion", label: "Occasion", type: "text" },
    // { name: "flag", label: "Flag", type: "text" },
    { name: "shortDescription", label: "Short Description", type: "text" },
    { name: "longDescription", label: "Long Description", type: "text" },
    { name: "defaultImage", label: "Default Image", type: "text" },
    // { name: "images", label: "Images", type: "text" },
    { name: "video", label: "Video", type: "text" },
    { name: "rating", label: "Rating", type: "text" },
    { name: "noOfRatings", label: "No of Ratings", type: "text" },
    { name: "noOfReviews", label: "No of Reviews", type: "text" },
  ];

  return (
    <>
      <div className={style.inputWrap}>
        <div id="scrollable-select-wrapper">
          <div>Choose Genre:</div>
          <Dropdown
            key={selectedGenreId}
            options={optionsGenre}
            value={tempData.genreId}
            handleChange={handleChange}
            placeholderText="Select a Genre"
            name="genreId"
            editFlag={true}
          />
        </div>

        <div id="scrollable-select-wrapper">
          <div>Choose Category:</div>
          <Dropdown
            key={selectedCategoryId}
            options={optionsCategory}
            value={tempData.categoryId}
            handleChange={handleChange}
            placeholderText="Select a Category"
            name="categoryId"
            editFlag={true}
          />
        </div>

        {inputData.map((item) => (
          <div key={item.name}>
            <div>{item.label}:</div>
            <input
              placeholder={`Enter ${item.label}`}
              className={style.input}
              type={item.type}
              name={item.name}
              value={tempData[item.name]}
              onChange={handleChange}
            />
          </div>
        ))}

      <div id="scrollable-select-wrapper">
          <div>Choose Flag:</div>
          <Dropdown
            key={selectedCategoryId}
            options={optionsFlag}
            value={tempData.flag}
            handleChange={handleChange}
            placeholderText="Select a Flag"
            name="flag"
            editFlag={true}
          />
        </div>

        <div>
          Images:
          <button onClick={handleAddImage} className="buttonWrap">Add</button>
          <button onClick={handleRemoveImage} className="buttonWrap">Remove</button>
        </div>

        {tempData.images?.map((e, i) => (
            <div key={i}>
              Image {i + 1}
              <textarea
                className="resizeable-textarea"
                type="text"
                name={`${i}`}
                value={tempData.images[i]}
                onChange={handleImageUpdate}
              />
            </div>
          ))}

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
          <button className="buttonWrap" onClick={handleEdit}> Edit </button>
          <button className="buttonWrap" onClick={handleCancel}> Cancel </button>
        </div>
      </div>
    </>
  );
};

export default productEdit;

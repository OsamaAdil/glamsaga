import React, { useState } from "react";
import style from "../components.module.css";

import Dropdown from "../dropdown";

const genreEdit = ({ tempData, setTempData, flagCreate, setFlagCreate, onCreateNew, handleSubmit, handleEdit, handleCancel, handleChange, optionsDelete }) => {

  return (
    <>
      <div className={style.inputWrap}>
        <div>
          <div>Edit:</div>
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
          <button className="buttonWrap" onClick={handleEdit}>Edit</button>
          <button className="buttonWrap" onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </>
  );
};

export default genreEdit;

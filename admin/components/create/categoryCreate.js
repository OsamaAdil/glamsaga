import React, { useState } from "react";
import style from "../components.module.css";

const categoryCreate = ({ tempData, setTempData, flagCreate, setFlagCreate, onCreateNew  }) => {

  const handleSubmit = () => {
    if (setFlagCreate) {
      setFlagCreate(false);
      onCreateNew(tempData);
    }
  };

  const handleCancel = () => {
    if (setFlagCreate) {
      setFlagCreate(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTempData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

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

export default categoryCreate;

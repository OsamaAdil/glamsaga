import React, { useState } from "react";
import style from "../components.module.css";

const customerCreate = ({ tempData, setTempData, flagCreate, setFlagCreate, onCreateNew  }) => {

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
          <div>Full Name:</div>
          <input
            placeholder="Enter Full Name"
            className={style.input}
            type="text"
            name="fullName"
            value={tempData.fullName}
            onChange={(event) => handleChange(event)}
          ></input>
        </div>
        <div>
          <div>Phone Number:</div>
          <input
            placeholder="Enter Number"
            className={style.input}
            type="text"
            name="phoneNumber"
            value={tempData.phoneNumber}
            onChange={(event) => handleChange(event)}
          ></input>
        </div>
        <div>
          <div>Address:</div>
          <input
            placeholder="Enter Address"
            className={style.input}
            type="text"
            name="address"
            value={tempData.address}
            onChange={(event) => handleChange(event)}
          ></input>
        </div>
        <div>
          <div>Landmark:</div>
          <input
            placeholder="Enter Landmark"
            className={style.input}
            type="text"
            name="landmark"
            value={tempData.landmark}
            onChange={(event) => handleChange(event)}
          ></input>
        </div>
        <div>
          <div>Pin Code:</div>
          <input
            placeholder="Enter Pin Code"
            className={style.input}
            type="text"
            name="pincode"
            value={tempData.pincode}
            onChange={(event) => handleChange(event)}
          ></input>
        </div>
        <div>
          <div>City:</div>
          <input
            placeholder="Enter City"
            className={style.input}
            type="text"
            name="city"
            value={tempData.city}
            onChange={(event) => handleChange(event)}
          ></input>
        </div>
        <div>
          <div>State:</div>
          <input
            placeholder="Enter State"
            className={style.input}
            type="text"
            name="state"
            value={tempData.state}
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

export default customerCreate;

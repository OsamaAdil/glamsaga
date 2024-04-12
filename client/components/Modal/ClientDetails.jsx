"use client";
import styles from "./clientdetails.module.css";
import { TextField, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { onCheckOut } from "@/redux/features/cartSlice";

import { useState } from "react";

export default function ClientDetails() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.phoneNumber.length !== 10) {
      alert("Phone number should contain exactly 10 digits.");
      return;
    }
    if (formData.pincode.length !== 6) {
      alert("Pin code should contain exactly 6 digits.");
      return;
    }
    console.log("Form Submitted:", formData);
  };
  const dispatch = useDispatch();

  function close() {
    dispatch(onCheckOut());
  }
  return (
    <div id="customerDetails" className={styles.container}>
      <div className={styles.heading}>
        <div>Add your Shipping Address</div>
        <div>
          <img src="/cross.png" onClick={close} />{" "}
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              InputLabelProps={{ style: { fontSize: "1.2rem" } }}
              inputProps={{ style: { fontSize: "1.2rem" } }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              InputLabelProps={{ style: { fontSize: "1.2rem" } }}
              inputProps={{ style: { fontSize: "1.2rem" } }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Phone Number"
              name="phoneNumber"
              pattern="\d{10}"
              title="Please enter a 10-digit phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              InputLabelProps={{ style: { fontSize: "1.2rem" } }}
              inputProps={{ style: { fontSize: "1.2rem" } }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              InputLabelProps={{ style: { fontSize: "1.2rem" } }}
              inputProps={{ style: { fontSize: "1.2rem" } }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              InputLabelProps={{ style: { fontSize: "1.2rem" } }}
              inputProps={{ style: { fontSize: "1.2rem" } }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Pincode"
              name="pincode"
              pattern="\d{6}"
              title="Please enter a 6-digit pin code"
              value={formData.pincode}
              onChange={handleChange}
              required
              InputLabelProps={{ style: { fontSize: "1.2rem" } }}
              inputProps={{ style: { fontSize: "1.2rem" } }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              InputLabelProps={{ style: { fontSize: "1.2rem" } }}
              inputProps={{ style: { fontSize: "1.2rem" } }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="State"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              InputLabelProps={{ style: { fontSize: "1.2rem" } }}
              inputProps={{ style: { fontSize: "1.2rem" } }}
            />
          </Grid>
        </Grid>

        <button type="submit" className={styles.button}>
          Submit and Proceed to Payment
        </button>
      </form>
    </div>
  );
}

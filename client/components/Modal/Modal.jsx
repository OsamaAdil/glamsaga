"use client";
import { onCheckOut } from "@/redux/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Grid } from "@mui/material";
import { useState } from "react";
import styles from "./modal.module.css";

export default function Modal() {
  const toggle = useSelector((state) => state.cart.modalToggler);
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
    console.log("Form Submitted:", formData);
  };

  const dispatch = useDispatch();

  function close() {
    dispatch(onCheckOut());
  }

  return (
    <div
      className={styles.mainContainer}
      style={{
        display: toggle ? "flex" : "none",
      }}
    >
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
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{
                  backgroundColor: "#3C152B",
                  color: "#ffffff",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                size="large"
                InputLabelProps={{ style: { fontSize: "1.2rem" } }}
              >
                Submit and Proceed for Online Payment
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}
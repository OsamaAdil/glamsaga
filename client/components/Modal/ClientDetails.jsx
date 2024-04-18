"use client";
import styles from "./clientdetails.module.css";
import { TextField, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { onCheckOut } from "@/redux/features/cartSlice";

import { useState } from "react";

export default function ClientDetails() {
  const cartItems = useSelector((state) => state.cart.cart);

  const desiredProperties = ["variantId", "quantity"];

  const data = cartItems.map((obj) => {
    const newObj = {};
    desiredProperties.forEach((prop) => {
      if (obj.hasOwnProperty(prop)) {
        newObj[prop] = obj[prop];
      }
    });
    return newObj;
  });

  console.log(data);

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
    const fetchOrder = async () => {
      try {
        const generateReceiptId = () => {
          const timestamp = Date.now().toString();
          const receiptId = "receipt" + timestamp;
          return receiptId;
        };

        const getAmountTotal = () => {
          return 500;
        };

        const receiptIdGenerated = generateReceiptId();
        const amount = getAmountTotal();
        const currency = "INR";

        const response = await fetch("http://localhost:7000/order", {
          method: "POST",
          body: JSON.stringify({
            amount,
            currency,
            formData,
            data,
            receipt: receiptIdGenerated,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        // console.log("response after hitting order on FE - response.body", response);
        // console.log("response after hitting order on FE - response.data", response?.data);

        const order = await response.json(); // Parse response JSON
        console.log("order generated on FE", order);

        const orderId = order.data.id;
        console.log("orderId", orderId);
        console.log("typeof(orderId)", typeof orderId);

        const options = {
          key: "rzp_test_PGjNbGrlpSBr2z",
          amount: 500, // Use order amount from response
          currency: "INR",
          name: "Glamsaga",
          description: "Payment for Purchase",
          image: "/your-logo.png",
          order_id: orderId,
          handler: async function (response) {
            console.log("inside handler");
            console.log("inside handler- response", response);

            const body = {
              ...response,
            };

            const validateRes = await fetch(
              "http://localhost:7000/order/validate",
              {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            const jsonRes = await validateRes.json();
            console.log(jsonRes);
          },
          prefill: {
            //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
            name: "Web Dev Matrix", //your customer's name
            email: "webdevmatrix@example.com",
            contact: "9082469146", //Provide the customer's phone number for better conversion rates
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
        console.log("before window opening");

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      } catch (error) {
        console.error("Error fetching order:", error);
      }
    };

    fetchOrder(); // Call fetchOrder function

    console.log("Form Submitted:", formData);
    // console.log("Form Submitted:", formData);
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
        <div className={styles.button1}>
          <button type="submit" className={styles.button}>
            Submit and Proceed to Payment
          </button>
        </div>
      </form>
    </div>
  );
}

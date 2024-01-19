import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice"; // Update the path accordingly

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

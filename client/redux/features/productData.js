// cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartToggler: false,
  cart: [], 
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    onCartClick: (state) => {
     
      state.cartToggler = !state.cartToggler;
    },
    addItemToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    incrementCartItem: (state, action) => {
      const { itemId } = action.payload;
      const cartItem = state.cart.find((item) => item.id === itemId);
      if (cartItem) {
        cartItem.quantity += 1;
      }
    },
    decrementCartItem: (state, action) => {
      const { itemId } = action.payload;
      const cartItem = state.cart.find((item) => item.id === itemId);
      if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity -= 1;
      }
    },
    deleteCartItem: (state, action) => {
      const { itemId } = action.payload;
      state.cart = state.cart.filter((item) => item.id !== itemId);
    },
  },
});

export const {
  onCartClick,
  addItemToCart,
  incrementCartItem,
  decrementCartItem,
  deleteCartItem,
} = cartSlice.actions;

export default cartSlice.reducer;

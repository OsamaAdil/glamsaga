// cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartToggler: false,
  cart: [], // Initial cart state as an empty array
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    onCartClick: (state) => {
      // Toggle the cartToggler value to show/hide the cart
      state.cartToggler = !state.cartToggler;
    },
    addItemToCart: (state, action) => {
      // Add an item to the cart
      state.cart.push(action.payload);
    },
    incrementCartItem: (state, action) => {
      // Increment the quantity of a specific item in the cart
      const { itemId } = action.payload;
      const cartItem = state.cart.find((item) => item.id === itemId);
      if (cartItem) {
        cartItem.quantity += 1;
      }
    },
    decrementCartItem: (state, action) => {
      // Decrement the quantity of a specific item in the cart
      const { itemId } = action.payload;
      const cartItem = state.cart.find((item) => item.id === itemId);
      if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity -= 1;
      }
    },
    deleteCartItem: (state, action) => {
      // Delete a specific item from the cart
      const { itemId } = action.payload;
      state.cart = state.cart.filter((item) => item.id !== itemId);
    },
  },
});

// Export action creators
export const {
  onCartClick,
  addItemToCart,
  incrementCartItem,
  decrementCartItem,
  deleteCartItem,
} = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;

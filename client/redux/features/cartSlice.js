import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartToggler: false,
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    onCartClick: (state) => {
      state.cartToggler = !state.cartToggler;
    },
    addItemToCart: (state, action) => {
      const cartItem = {
        id: action.payload.ProductID,
        title: action.payload.Title,
        price: action.payload.SellingPrice,
        quantity: 1,
      };
      const itemId = action.payload.ProductID;
      const index = state.cart.findIndex((item) => item.id === itemId);
      if (index !== -1) {
        state.cart[index].quantity = state.cart[index].quantity + 1;
      } else {
        state.cart.push(cartItem);
      }
      if(!state.cartToggler){
        state.cartToggler = !state.cartToggler;
      }
    },

    incrementCartItem: (state, action) => {
      state.cart[action.payload].quantity += 1;
    },
    decrementCartItem: (state, action) => {
      if (state.cart[action.payload].quantity > 1) {
        state.cart[action.payload].quantity -= 1;
      }
    },
    deleteCartItem: (state, action) => {
      const itemId = action.payload.id;
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

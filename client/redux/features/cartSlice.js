import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartToggler: false,
  cart: [],
  modalToggler: false,
  
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    onCheckOut: (state) => {
      state.modalToggler = !state.modalToggler;
    },
    onCartClick: (state) => {
      state.cartToggler = !state.cartToggler;
    },
    addItemToCart: (state, action) => {
      const cartItem = {
        id: action.payload.product._id,
        title: action.payload.product.title,
        price: action.payload.product.price,
        discount: action.payload.product.discountPercentage,
        quantity: 1,
        variantId: action.payload.variant.id,
        size: action.payload.variant.size,
        colour: action.payload.variant.colour,
      };
      const itemId = action.payload.variant.id;
      const index = state.cart.findIndex((item) => item.variantId === itemId);

      if (index !== -1) {
        state.cart[index].quantity = state.cart[index].quantity + 1;
      } else {
        state.cart.push(cartItem);
      }
      if (!state.cartToggler) {
        state.cartToggler = !state.cartToggler;
      }
    },
    addItemToCart1: (state, action) => {
      const cartItem = {
        id: action.payload.product._id,
        title: action.payload.product.title,
        price: action.payload.product.price,
        discount: action.payload.product.discountPercentage,
        quantity: 1,
        variantId: action.payload.selectedVariant.id,
        size: action.payload.selectedVariant.size,
        colour: action.payload.selectedVariant.colour,
      };
      const itemId = action.payload.selectedVariant.id;
      const index = state.cart.findIndex((item) => item.variantId === itemId);

      if (index !== -1) {
        state.cart[index].quantity = state.cart[index].quantity + 1;
      } else {
        state.cart.push(cartItem);
      }
      if (!state.cartToggler) {
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
      const itemId = action.payload.variantId;
      state.cart = state.cart.filter((item) => item.variantId !== itemId);
    },
  },
});

export const {
  onCheckOut,
  onCartClick,
  addItemToCart,
  addItemToCart1,
  incrementCartItem,
  decrementCartItem,
  deleteCartItem,
} = cartSlice.actions;

export default cartSlice.reducer;

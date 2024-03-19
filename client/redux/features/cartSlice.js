import { createSlice } from "@reduxjs/toolkit";
import { fetchProductVariants } from "@/components/api";

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
        id: action.payload.product._id,
        title: action.payload.product.title,
        price: action.payload.product.price,
        discount: action.payload.product.discountPercentage,
        quantity: 1,

        size: action.payload.variant ? variant.size : "M",
      };
      const itemId = action.payload._id;
      const index = state.cart.findIndex((item) => item.id === itemId);

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

// store.js
import { configureStore } from '@reduxjs/toolkit';
import GenreSliceReducer from '../store/slices/genreSlice';

const store = configureStore({
  reducer: {
    genre: GenreSliceReducer, // Add more slices here if needed
  },
});

export default store;

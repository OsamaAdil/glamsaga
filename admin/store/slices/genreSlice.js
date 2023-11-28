import { createSlice } from '@reduxjs/toolkit';

const genreSlice = createSlice({
  name: 'genreSliceName',
  initialState: {
    genreId: "",
    name: "",
    isDelete: ""
  }, 
  reducers: {
    set: (state, action) => {
        state.genreId = action.payload.genreId;
        state.name = action.payload.name;
        state.isDelete = action.payload.isDelete;
    },
    create: (state, action) => {
      state.name = action.payload.name;
      state.isDelete = false;
    },
    edit: (state, action) => {
        state.genreId = action.payload.genreId;
        state.name = action.payload.name;
        state.isDelete = action.payload.isDelete;
      },
    delete: (state, action) => {
        state.genreId = action.payload.genreId;
        state.isDelete = true;
      },
  }
});

export const { increment } = genreSlice.actions;
export default genreSlice.reducer;
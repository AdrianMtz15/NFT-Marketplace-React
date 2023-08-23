import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: [],
  reducers: {
    setCategory: (state, action) => {
      state.push(action.payload); 
    },
    deleteCategory: (state, action) => {
      const categoryIndex = state.findIndex(elem => {
        return elem === action.payload;
      });

      state.splice(categoryIndex, 1);
    }
  }
});

export default categorySlice.reducer;

export const { setCategory, deleteCategory } = categorySlice.actions;
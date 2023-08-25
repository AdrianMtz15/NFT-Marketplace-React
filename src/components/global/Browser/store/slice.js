import { createSlice } from "@reduxjs/toolkit";

export const browserSlice = createSlice({
  name: "browser",
  initialState: '',
  reducers: {
    setSearch: (state, action) => {
      return state = action.payload;
    }
  }
});

export default browserSlice.reducer;

export const { setSearch } = browserSlice.actions;
import { createSlice } from "@reduxjs/toolkit";

export const sessionSlice = createSlice({
  name: "session",
  initialState: {
    user: null,
    isAuth: false
  },
  reducers: {
		login: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
		},
    logout: (state) => {
      state.user = null;
      state.isAuth = false;
    }

  }
});

export default sessionSlice.reducer;

export const { login, logout } = sessionSlice.actions;

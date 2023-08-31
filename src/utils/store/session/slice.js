import { createSlice } from "@reduxjs/toolkit";

const initialAuth = JSON.parse(localStorage.getItem('auth'))?.isAuth || false;
const initialUser = JSON.parse(localStorage.getItem('auth'))?.user || false;

export const sessionSlice = createSlice({
  name: "session",
  initialState: {
    user: initialUser,
    isAuth: initialAuth,
    navActive: false
  },
  reducers: {
		login: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
		},
    logout: (state) => {
      state.user = null;
      state.isAuth = false;
    },
    toggleNav: (state) => {
      state.navActive = !state.navActive;
    }

  }
});

export default sessionSlice.reducer;

export const { login, logout, toggleNav } = sessionSlice.actions;

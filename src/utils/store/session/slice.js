import { createSlice } from "@reduxjs/toolkit";

const initialAuth = JSON.parse(localStorage.getItem('auth'))?.isAuth || false;
const initialUser = JSON.parse(localStorage.getItem('auth'))?.user || false;

export const sessionSlice = createSlice({
  name: "session",
  initialState: {
    user: initialUser,
    isAuth: initialAuth
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

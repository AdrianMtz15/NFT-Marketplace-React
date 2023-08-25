import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    fetchUsers: (state, action) => {
      return state = action.payload;
    },
    updateUsers: (state, action) => {
      return state = action.payload;
    }
  }
});

export default usersSlice.reducer;
export const {
  fetchUsers,
  updateUsers
} = usersSlice.actions;
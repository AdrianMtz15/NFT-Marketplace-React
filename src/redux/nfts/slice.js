import { createSlice } from "@reduxjs/toolkit";

export const nftsSlice = createSlice({
  name: "nfts",
  initialState: [],
  reducers: {
		fetchNfts: (state, action) => {
			return state = action.payload;
		},
    createNewNft: (state, action) => {
      console.log(state);
      console.log(action);
    }
  }
});

export default nftsSlice.reducer;

export const { fetchNfts, createNewNft } = nftsSlice.actions;

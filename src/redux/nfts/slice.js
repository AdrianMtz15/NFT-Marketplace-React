import { createSlice } from "@reduxjs/toolkit";

export const nftsSlice = createSlice({
  name: "nfts",
  initialState: {
    allNfts: [],
    filteredNfts: [],
  },
  reducers: {
		setAllNfts: (state, action) => {
      const newItems = action.payload;

      const newState = {
        ...state,
        allNfts: newItems
      }

			return newState;
		},
    addNewNft: (state, action) => {
      console.log(state);
      console.log(action);
    },
    setFilterNfts: (state, action) => {
      const filteredItems = action.payload;

      const newState = {
        ...state,
        filteredNfts: filteredItems
      }

      return newState;
    }
  }
});

export default nftsSlice.reducer;

export const { setAllNfts, addNewNft, setFilterNfts } = nftsSlice.actions;

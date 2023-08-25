import { createSlice } from "@reduxjs/toolkit";

export const nftsSlice = createSlice({
  name: "nfts",
  initialState: {
    allNfts: [],
    filteredBySearch: [],
    filteredByCategory: []
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
      const { filteredItems, filterType } = action.payload;

      if(filterType === 'category') {
        return {
          ...state,
          filteredByCategory: filteredItems
        }
      } else if(filterType === 'search') {
        return {
          ...state,
          filteredBySearch: filteredItems
        }
      }
    }
  }
});

export default nftsSlice.reducer;

export const { setAllNfts, addNewNft, setFilterNfts } = nftsSlice.actions;

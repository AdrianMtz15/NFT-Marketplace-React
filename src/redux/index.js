import { configureStore } from "@reduxjs/toolkit";
import nftsReducer from "./nfts/slice";

// const localStorageMiddleware = (store) => (next) => (action) => {
// 	next(action);
// 	localStorage.setItem("__redux_store__", JSON.stringify(store.getState()));
// };

export const store = configureStore({
	reducer: {
		nfts: nftsReducer,
	},
	middleware: [],
});
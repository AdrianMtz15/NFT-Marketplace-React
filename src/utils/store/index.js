import { configureStore } from "@reduxjs/toolkit";
import nftsReducer from "./nfts/slice";
import usersReducer from "./users/slice";
import browserReducer from "./browser/slice";
import categoryReducer from "./category/slice";

// const localStorageMiddleware = (store) => (next) => (action) => {
// 	next(action);
// 	localStorage.setItem("__redux_store__", JSON.stringify(store.getState()));
// };

export const store = configureStore({
	reducer: {
		nfts: nftsReducer,
		users: usersReducer,
		browser: browserReducer,
		categories: categoryReducer
	},
	middleware: [],
});
import { configureStore } from "@reduxjs/toolkit";

import sessionReducer from "./session/slice"
import nftsReducer from "../../components/nfts/store/slice";
import usersReducer from "../../components/users/store/slice";
import categoryReducer from "../../components/categories/store/slice";
import browserReducer from "../../components/global/Browser/store/slice";

// const localStorageMiddleware = (store) => (next) => (action) => {
// 	next(action);
// 	localStorage.setItem("__redux_store__", JSON.stringify(store.getState()));
// };

export const store = configureStore({
	reducer: {
		session: sessionReducer,
		nfts: nftsReducer,
		users: usersReducer,
		browser: browserReducer,
		categories: categoryReducer
	},
	middleware: [],
});
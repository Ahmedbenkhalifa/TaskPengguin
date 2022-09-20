import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme.slice";
import toastsReducer from "./toasts.slice";
import searchReducer from "./search.slice";
import watchListReducer from "./watchList.slice";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  theme: themeReducer,
  toasts: toastsReducer,
  search: searchReducer,
  watchList: watchListReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

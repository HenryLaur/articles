import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import articleReducer from "../components/article/ArticleSlice";

export const reducer = combineReducers({ articles: articleReducer });

export const store = configureStore({
  reducer,
  middleware: [thunk],
});

export type RootState = ReturnType<typeof reducer>;

export default store;

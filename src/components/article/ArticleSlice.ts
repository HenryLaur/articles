import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: initialState = {
  articles: [],
};

export interface initialState {
  articles: Article[];
}

export interface Article {
  author: string;
  content: string;
  contentSnippet: string;
  isoDate: string;
  link: string;
  pictureUrl: string;
  title: string;
}

export const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    addAllArticles(state, action: PayloadAction<Article[]>) {
      state.articles = action.payload;
    },
  },
});

export const { addAllArticles } = articleSlice.actions;

export default articleSlice.reducer;

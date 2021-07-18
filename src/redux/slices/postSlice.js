import { createSlice } from "@reduxjs/toolkit";

const sliceName = "postSlice";

export const slice = createSlice({
  name: sliceName,
  initialState: {
    posts: [],
  },
  reducers: {
    addPost: (state, action) => {
      let { payload } = action;
      state.posts = [...state.posts, payload];
    },
  },
});

export const { addPost } = slice.actions;

export default slice.reducer;

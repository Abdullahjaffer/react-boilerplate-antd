import { createSlice } from "@reduxjs/toolkit";

const sliceName = "themeSlice";

const initialState = {
  dark: true,
};

export const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    switchTheme: (state, { payload }) => {
      state.dark = payload;
    },
  },
});

export const { switchTheme } = slice.actions;

export default slice.reducer;

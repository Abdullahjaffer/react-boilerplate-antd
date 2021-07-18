import { createSlice } from "@reduxjs/toolkit";

const sliceName = "userSlice";

const initialState = {
  isAuthenticated: false,
  user: {},
};

export const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    addUser: (state, action) => {
      let { payload } = action;
      state.user = payload;
      state.isAuthenticated = true;
    },
    deleteUser: (state, action) => {
      state.isAuthenticated = false;
      state.user = {};
    },
  },
});

export const loginUser = (userObj) => {
  // Some API logic here
  console.log("CALLED");
  return (dispatch) => {
    dispatch(addUser(userObj));
    return true;
  };
};

export const { addUser, deleteUser } = slice.actions;

export default slice.reducer;

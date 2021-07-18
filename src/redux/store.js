import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import postSlice from "./slices/postSlice";
import userSlice from "./slices/userSlice";

let reducers = combineReducers({
  postSlice,
  userSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userSlice"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

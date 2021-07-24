import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import postSlice from "./slices/postSlice";
import themeSlice from "./slices/themeSlice";
import userSlice from "./slices/userSlice";

let reducers = combineReducers({
  postSlice,
  userSlice,
  themeSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userSlice", "themeSlice"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

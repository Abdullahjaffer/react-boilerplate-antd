import React from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import Bootstrap from "../bootstrap";
import { store } from "../redux/store";
import AppRoutesMapper from "../routes/appRoutesMapper";
import "../theming/main.less";

const App = () => {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={() => <h2>Loading...</h2>} persistor={persistor}>
        <Bootstrap />
        <AppRoutesMapper />
      </PersistGate>
    </Provider>
  );
};

export default App;

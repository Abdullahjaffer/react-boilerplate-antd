import React from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import ThemeSwitcher from "../components/layout/themeSwitcher";
import { store } from "../redux/store";
import AppRoutesMapper from "../routes/appRoutesMapper";
import "../styles/main.less";
import ThemeProvider from "../styles/theme/themeProvider";

const App = () => {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={() => <h2>Loading...</h2>} persistor={persistor}>
        <ThemeProvider>
          <AppRoutesMapper />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

import { message, Select, Spin } from "antd";
import React, { createContext, useRef, useState } from "react";
import FlexedDiv from "../../components/ui/flexedDiv";
import "../main.less";
import darkVars from "./dark.json";
import lightVars from "./light.json";
import themeVars from "./theme.json";

const Option = Select.Option;

export const ThemeContext = createContext();
export const DARK_THEME = "dark";
export const LIGHT_THEME = "light";
const THEME_NAME = "theme-name";
const APP_THEME = "app-theme";

const useConstructor = (callBack = () => {}) => {
  const hasBeenCalled = useRef(false);
  if (hasBeenCalled.current) return;
  callBack();
  hasBeenCalled.current = true;
};

const ThemeProvider = ({ children }) => {
  const [state, setState] = useState({});
  useConstructor(() => {
    let initialValue = lightVars;
    let vars = {};
    let themeName = localStorage.getItem(THEME_NAME) || LIGHT_THEME;
    try {
      vars = localStorage.getItem(APP_THEME);
      if (!vars) {
        vars = initialValue;
      } else {
        vars = Object.assign({}, JSON.parse(vars));
      }
    } catch (e) {
      vars = initialValue;
    } finally {
      vars = { ...vars, ...themeVars };
      setState({
        vars,
        initialValue,
        size: "default",
        disabled: false,
        themeName,
        themeApplied: false,
      });
      window.less
        .modifyVars(vars)
        .then(() => {
          setState((state) => ({ ...state, themeApplied: true }));
        })
        .catch((error) => {
          message.error(`Failed to update theme`);
        });
    }
  });

  if (!state.themeApplied) {
    return (
      <FlexedDiv justifyContent="center" height="100vh">
        <Spin size="large" />
      </FlexedDiv>
    );
  }

  const toggleTheme = (isDarkMode) => {
    let vars = isDarkMode ? darkVars : lightVars;
    let value = isDarkMode ? DARK_THEME : LIGHT_THEME;
    vars = { ...vars, ...themeVars, "@white": "#fff", "@black": "#000" };
    setState((state) => ({ ...state, vars, themeName: value }));
    setState((state) => ({ ...state, vars }));
    localStorage.setItem(APP_THEME, JSON.stringify(vars));
    localStorage.setItem(THEME_NAME, value);
    window.less.modifyVars(vars).catch((error) => {});
  };

  return (
    <ThemeContext.Provider value={{ state, toggleTheme }}>
      <div
        className={
          state.themeName === DARK_THEME
            ? "dark-theme-custom"
            : "light-theme-custom"
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

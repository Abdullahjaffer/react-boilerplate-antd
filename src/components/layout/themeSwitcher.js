import { Switch } from "antd";
import React, { useContext } from "react";
import { ReactComponent as DarkIcon } from "../../assets/icons/crescent-moon.svg";
import { ReactComponent as LightIcon } from "../../assets/icons/sunny.svg";
import { DARK_THEME, ThemeContext } from "../../styles/theme/themeProvider";
import Flex from "../ui/flex";

const ThemeSwitcher = () => {
  const { state, toggleTheme } = useContext(ThemeContext);
  return (
    <Switch
      checked={state?.themeName === DARK_THEME}
      onChange={toggleTheme}
      checkedChildren={
        <Flex>
          <LightIcon />
        </Flex>
      }
      unCheckedChildren={
        <Flex>
          <DarkIcon />
        </Flex>
      }
    />
  );
};

export default ThemeSwitcher;

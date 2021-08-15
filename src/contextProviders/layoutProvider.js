import React, { createContext, useEffect, useState } from "react";
import useWindowDimensions from "../utils/hooks/useWindowDimensions";

export const LayoutContext = createContext();

const LayoutProvider = ({ children }) => {
  const [isCollapsed, setCollapsed] = useState(false);
  const [isMobile, setMobile] = useState(false);
  const { width } = useWindowDimensions();
  useEffect(() => {
    if (width < 1024) {
      setCollapsed(true);
    }
    if (width < 520) {
      setMobile(true);
    }
  }, [width]);

  return (
    <LayoutContext.Provider value={{ isCollapsed, setCollapsed, isMobile }}>
      <div className={isCollapsed ? "is-collapsed-layout" : ""}>{children}</div>
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;

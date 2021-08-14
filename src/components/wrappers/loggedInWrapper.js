import React from "react";
import { useHistory } from "react-router-dom";
import LayoutWithSidebar from "../layout/layoutWithSidebar";

const LoggedInWrapper = ({ children }) => {
  const history = useHistory();
  return <LayoutWithSidebar>{children}</LayoutWithSidebar>;
};

export default LoggedInWrapper;

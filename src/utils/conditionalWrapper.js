import React from "react";

const ConditionalWrapper = ({ condition, wrapper: Wrapper, children }) =>
  condition ? <Wrapper>{children}</Wrapper> : children;

export default ConditionalWrapper;

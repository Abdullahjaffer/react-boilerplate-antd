import React from "react";

const FlexedDiv = ({
  children,
  justifyContent = "space-between",
  alignItems = "center",
  ...props
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: justifyContent,
        alignItems: alignItems,
        ...props,
      }}
    >
      {children}
    </div>
  );
};

export default FlexedDiv;

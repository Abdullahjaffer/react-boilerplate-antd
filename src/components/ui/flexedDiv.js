import React from "react";

const FlexedDiv = ({
  children,
  justifyContent = "space-between",
  alignItems = "center",
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: justifyContent,
        alignItems: alignItems,
      }}
    >
      {children}
    </div>
  );
};

export default FlexedDiv;

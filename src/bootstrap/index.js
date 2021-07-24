import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ReactComponent as ReactLogo } from "../assets/images/logo.svg";
import darkVar from "../theming/dark.json";
import lightVar from "../theming/light.json";
import themeVar from "../theming/theme.json";

const Bootstrap = () => {
  const [show, setShow] = useState(true);
  const dark = useSelector((state) => state.themeSlice.dark);

  useEffect(() => {
    if (dark) {
      window.less.modifyVars(darkVar).catch((error) => {});
    } else {
      window.less.modifyVars(lightVar).catch((error) => {});
    }
    window.less.modifyVars(themeVar).catch((error) => {});
    setShow(false);
  }, [dark]);

  return (
    show && (
      <div
        style={{
          position: "fixed",
          backgroundColor: "black",
          height: "100vh",
          width: "100vw",
          top: 0,
          left: 0,
          zIndex: 100,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            color: "white",
            transform: "translate(-50%, -50%)",
          }}
        >
          <ReactLogo />
          Hello, Setting things up for you...
        </div>
      </div>
    )
  );
};

export default Bootstrap;

import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AuthedRoute from "./authRoute";
import history from "./history";
import routes from "./routes";

const AppRoutesMapper = () => {
  return (
    <Router history={history}>
      <Switch>
        {routes.map((route) => (
          <AuthedRoute {...route} />
        ))}
      </Switch>
    </Router>
  );
};

export default AppRoutesMapper;

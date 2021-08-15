import _ from "lodash";
import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import ConditionalWrapper from "../utils/conditionalWrapper";
import isAuthenticated, { hasRole } from "../utils/isAuthenticated";
import { errorRoutes } from "./routes";

const AuthCheck = ({ authenticated, path, children, roles = ["*"] }) => {
  console.log(roles);
  console.log(hasRole(roles));
  const location = useLocation();
  if (authenticated) {
    if (isAuthenticated()) {
      if (hasRole(roles)) {
        return children;
      } else {
        return (
          <Redirect
            to={{
              pathname: "/unauthorized",
              state: { from: location },
            }}
          />
        );
      }
    } else {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location },
          }}
        />
      );
    }
  } else {
    return children;
  }
};

const AuthedRoute = ({ childRoutes, childrenWrapper, ...props }) => {
  let { path, exact, component } = props;
  if (childRoutes && childRoutes.length) {
    component = (
      <ConditionalWrapper
        condition={!!childrenWrapper}
        wrapper={childrenWrapper}
      >
        <Switch>
          {[...childRoutes, ...errorRoutes].map((route, i) => (
            <AuthedRoute
              key={i}
              {..._.omit(props, ["childrenWrapper"])}
              {...route}
              path={path + route.path}
            />
          ))}
        </Switch>
      </ConditionalWrapper>
    );
  } else {
    let Component = component;
    component = (
      <Route path={path} exact={exact}>
        <AuthCheck {...props}>
          <Component />
        </AuthCheck>
      </Route>
    );
  }
  return component;
};

export default AuthedRoute;

import _ from "lodash";
import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import ConditionalWrapper from "../utils/conditionalWrapper";
import isAuthenticated from "../utils/isAuthenticated";

const AuthCheck = ({ authenticated, path, children }) => {
  const location = useLocation();
  if (authenticated) {
    if (isAuthenticated()) {
      return children;
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
        <Route
          path={path}
          render={({ match: { url } }) => (
            <>
              {childRoutes.map((route, i) => (
                <AuthedRoute
                  key={i}
                  {..._.omit(props, ["childrenWrapper"])}
                  {...route}
                  path={url + route.path}
                />
              ))}
            </>
          )}
        />
      </ConditionalWrapper>
    );
  } else {
    let Component = component;
    component = (
      <AuthCheck {...props}>
        <Route path={path} exact={exact ?? false}>
          <Component />
        </Route>
      </AuthCheck>
    );
  }
  return component;
};

export default AuthedRoute;

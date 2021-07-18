/**
 * Sample Route contains these props
 * {
    path: "/dashboard",
    authenticated: true,
    childrenWrapper: LoggedInWrapper,
    childRoutes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/repos",
        exact: true,
        childRoutes: [
          {
            path: "/",
            component: Posts,
          },
          {
            path: "/:id",
            component: About,
          },
        ],
      },
    ],
  },
 */

import React from "react";
import { Redirect } from "react-router-dom";
import LoggedInWrapper from "../components/wrappers/loggedInWrapper";
import About from "../pages/about";
import AddPost from "../pages/addPost";
import Home from "../pages/home";
import LoginPage from "../pages/login";
import Posts from "../pages/posts";

const routes = [
  // authentciated routes
  {
    path: "/dashboard",
    authenticated: true,
    childrenWrapper: LoggedInWrapper,
    childRoutes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/about",
        component: About,
      },
      {
        path: "/posts",
        exact: true,
        childRoutes: [
          {
            path: "/",
            component: Posts,
          },
          {
            path: "/create",
            component: AddPost,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "*",
    component: () => (
      <Redirect
        to={{
          pathname: "/dashboard",
          state: { from: "/" },
        }}
      />
    ),
  },
];

export default routes;

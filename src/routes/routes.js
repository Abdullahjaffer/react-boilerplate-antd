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
import BadRequest from "../pages/errorPages/badRequest";
import NotFound from "../pages/errorPages/notFound";
import Unauthorized from "../pages/errorPages/unauthorized";
import Home from "../pages/home";
import LoginPage from "../pages/login";
import Posts from "../pages/posts";

export const errorRoutes = [
  {
    path: "/bad-request",
    component: BadRequest,
  },
  {
    path: "/unauthorized",
    component: Unauthorized,
  },
  {
    path: "/*",
    component: NotFound,
  },
];

const routes = [
  // authentciated routes
  {
    path: "/",
    exact: true,
    component: () => <Redirect to={"/dashboard"} />,
  },
  {
    path: "/dashboard",
    authenticated: true,
    childrenWrapper: LoggedInWrapper,
    roles: ["admin"],
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
        childRoutes: [
          {
            path: "/",
            exact: true,
            component: Posts,
            roles: ["user"],
          },
          {
            path: "/create",
            component: AddPost,
          },
          {
            path: "/bad-request",
            component: BadRequest,
          },
          {
            path: "/unauthorized",
            component: Unauthorized,
          },
          {
            path: "/*",
            component: NotFound,
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
    path: "/user",
    roles: ["user"],
    component: () => <div>Viewer</div>,
  },
  ...errorRoutes,
];

export default routes;

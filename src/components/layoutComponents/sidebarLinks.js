import {
  GithubOutlined,
  HomeOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import React from "react";

const sidebarNavs = [
  {
    title: "Dashboard",
    icon: <HomeOutlined />,
    link: "/dashboard",
  },
  {
    title: "Posts",
    icon: <UnorderedListOutlined />,
    link: "/dashboard/posts",
    children: [
      {
        title: "List",
        icon: <UnorderedListOutlined />,
        link: "/dashboard/posts",
      },
      {
        title: "Create",
        icon: <UnorderedListOutlined />,
        link: "/dashboard/posts/create",
      },
    ],
  },
  {
    title: "About",
    icon: <GithubOutlined />,
    link: "/dashboard/about",
  },
];

export default sidebarNavs;

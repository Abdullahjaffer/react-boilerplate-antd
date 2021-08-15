import { Card, Layout } from "antd";
import React from "react";
import HeaderComponent from "./header";
import Sidebar from "./sidebar";

const { Content } = Layout;

const LayoutWithSidebar = ({ children }) => {
  return (
    <Layout>
      <Sidebar />
      <HeaderComponent />
      <Layout className="content-area">
        <Card bordered={false}>{children}</Card>
      </Layout>
    </Layout>
  );
};

export default LayoutWithSidebar;

import { Card, Layout, Menu } from "antd";
import React from "react";
import HeaderComponent from "./header";
import Sidebar from "./sidebar";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const LayoutWithSidebar = ({ children }) => {
  return (
    <Layout>
      <HeaderComponent />
      <Layout>
        <Sidebar />
        <Layout
          style={{
            marginLeft: 200,
            marginTop: 64,
          }}
        >
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Card bordered={false}>{children}</Card>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutWithSidebar;

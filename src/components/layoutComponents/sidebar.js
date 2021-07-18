import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import sidebarNavs from "./sidebarLinks";

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const history = useHistory();
  const { pathname } = useLocation();

  return (
    <Sider
      // trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 64,
      }}
      onCollapse={setCollapsed}
    >
      <Menu
        onClick={(e) => history.push(e.key)}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[pathname]}
        defaultOpenKeys={[
          sidebarNavs.find((el) =>
            el.children?.find((sub) => sub.link == pathname)
          )?.link,
        ]}
      >
        {sidebarNavs.map((item) =>
          item.children ? (
            <SubMenu key={item.link} icon={item.icon} title={item.title}>
              {item.children.map((el) => (
                <Menu.Item key={el.link} icon={el.icon}>
                  {el.title}
                </Menu.Item>
              ))}
            </SubMenu>
          ) : (
            <Menu.Item key={item.link} icon={item.icon}>
              {item.title}
            </Menu.Item>
          )
        )}
      </Menu>
    </Sider>
  );
};

export default Sidebar;

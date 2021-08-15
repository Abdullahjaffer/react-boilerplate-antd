import { Layout, Menu } from "antd";
import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { LayoutContext } from "../../contextProviders/layoutProvider";
import { ThemeContext } from "../../styles/theme/themeProvider";
import sidebarNavs from "./sidebarLinks";

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = ({ children }) => {
  const { isCollapsed, setCollapsed } = useContext(LayoutContext);
  const { state } = useContext(ThemeContext);
  const history = useHistory();
  const { pathname } = useLocation();

  const menu = (
    <Menu
      onClick={(e) => history.push(e.key)}
      theme={state?.themeName}
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
  );

  return (
    <Sider
      // trigger={null}
      collapsible
      collapsed={isCollapsed}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 2,
      }}
      onCollapse={setCollapsed}
      theme={state?.themeName}
    >
      {menu}
    </Sider>
  );
};

export default Sidebar;

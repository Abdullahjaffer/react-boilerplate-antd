import { DownOutlined, LogoutOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Layout, Menu, Typography } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ReactComponent as ReactLogo } from "../../assets/images/logo.svg";
import { deleteUser } from "../../redux/slices/userSlice";
import FlexedDiv from "../ui/flexedDiv";
import ThemeSwitcher from "./themeSwitcher";

const { Header } = Layout;

const UserMenu = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const dark = useSelector((state) => state.themeSlice.dark);

  const menu = (
    <Menu>
      <Menu.Item
        icon={<LogoutOutlined />}
        onClick={() => {
          dispatch(deleteUser());
          history.push("/login");
        }}
      >
        Log Out
      </Menu.Item>
    </Menu>
  );
  return (
    <FlexedDiv>
      <ThemeSwitcher />
      <Dropdown overlay={menu} placement="bottomRight">
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          <FlexedDiv>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <DownOutlined />
          </FlexedDiv>
        </a>
      </Dropdown>
    </FlexedDiv>
  );
};

const HeaderComponent = () => {
  return (
    <Header className="custom-header-layout">
      <FlexedDiv>
        <FlexedDiv justifyContent="start">
          <ReactLogo
            style={{
              width: 42,
            }}
          />
          <Typography.Text>REACT BASIC</Typography.Text>
        </FlexedDiv>
        <UserMenu />
      </FlexedDiv>
    </Header>
  );
};

export default HeaderComponent;

import { DownOutlined, LogoutOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Layout, Menu, Switch, Typography } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ReactComponent as ReactLogo } from "../../assets/images/logo.svg";
import { switchTheme } from "../../redux/slices/themeSlice";
import { deleteUser } from "../../redux/slices/userSlice";
import FlexedDiv from "../uiComponents/flexedDiv";

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
      <Switch
        checked={dark}
        onChange={(value) => {
          dispatch(switchTheme(value));
        }}
        size="small"
        style={{
          marginRight: 10,
        }}
        checkedChildren={}
        unCheckedChildren={}
      />
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
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
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

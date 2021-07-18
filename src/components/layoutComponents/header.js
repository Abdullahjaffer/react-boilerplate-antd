import { DownOutlined, LogoutOutlined } from "@ant-design/icons";
import { Dropdown, Layout, Menu, Typography } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ReactComponent as ReactLogo } from "../../assets/images/logo.svg";
import { deleteUser } from "../../redux/slices/userSlice";
import FlexedDiv from "../uiComponents/flexedDiv";

const { Header } = Layout;

const UserMenu = () => {
  const dispatch = useDispatch();
  const history = useHistory();

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
    <Dropdown overlay={menu} placement="bottomRight">
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        <FlexedDiv>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <DownOutlined />
        </FlexedDiv>
      </a>
    </Dropdown>
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

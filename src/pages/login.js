import { Button, Card, Form, Input, Select } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteUser, loginUser } from "../redux/slices/userSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // Make sure if user is on login page. Log him out
  useEffect(() => {
    dispatch(deleteUser());
  }, []);

  const onLogin = (values) => {
    let isDataSaved = dispatch(loginUser(values));
    if (isDataSaved) {
      history.push("/");
    }
  };

  return (
    <Card
      title="Log in"
      style={{
        maxWidth: 300,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Form layout="vertical" onFinish={onLogin}>
        <Form.Item
          rules={[
            {
              type: "email",
              required: true,
            },
          ]}
          label="Email"
          name="email"
        >
          <Input />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
            },
          ]}
          label="Password"
          name="password"
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
            },
          ]}
          label="Role"
          name="role"
        >
          <Select>
            <Select.Option value="admin">Admin</Select.Option>
            <Select.Option value="user">User</Select.Option>
          </Select>
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
      </Form>
    </Card>
  );
};

export default LoginPage;

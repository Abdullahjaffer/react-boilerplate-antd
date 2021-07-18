import { Button, Form, Input, message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/slices/postSlice";

const AddPost = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h2>Add Posts</h2>
      <Form
        onFinish={(values) => {
          dispatch(addPost(values.post));
          message.success("Post added!");
        }}
        layout="vertical"
      >
        <Form.Item
          name="post"
          label="Post"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form>
    </>
  );
};

export default AddPost;

import { List } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const Post = () => {
  let posts = useSelector((state) => state.postSlice.posts);

  return (
    <List
      header={<h2>Posts</h2>}
      bordered
      dataSource={posts}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  );
};

export default Post;

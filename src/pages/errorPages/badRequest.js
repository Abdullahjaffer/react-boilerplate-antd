import { Button, Result } from "antd";
import React from "react";
import { useHistory } from "react-router";

const BadRequest = () => {
  const history = useHistory();

  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={
        <Button type="primary" onClick={() => history.push("/")}>
          Back Home
        </Button>
      }
    />
  );
};

export default BadRequest;

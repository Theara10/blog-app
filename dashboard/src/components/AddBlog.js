import { useMutation, gql } from "@apollo/client";
import { Form, Input, Button } from "antd";
import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Upload } from "antd";

const CREATE_BLOG = gql`
  mutation createBlog($data: BlogInput) {
    createBlog(data: $data)
  }
`;

const normFile = (e) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }
  console.log(e);
  return e && e.fileList;
};

function AddBlog() {
  const [createBlog] = useMutation(CREATE_BLOG, {});

  const onFinish = (x) => {
    // console.log(x);
    createBlog({
      variables: {
        data: {
          title: x.title,
          description: x.description,
        },
      },
    });
  };
  return (
    <div>
      <h2>add blog</h2>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item name="title">
          <Input placeholder="Title" />
        </Form.Item>
        <Form.Item name="description" style={{ height: 50 }}>
          <Input type="text" placeholder="Description" />
        </Form.Item>
        <Form.Item
          name="upload"
          label="Image"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          extra=""
        >
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddBlog;

import React, { useState } from "react";
import { List, Input, Form, Skeleton, Modal } from "antd";
import { useQuery, gql, useMutation } from "@apollo/client";
import EditBlog from "./EditBlog";
import { useHistory } from "react-router-dom";

const BLOGS = gql`
  {
    listBlog {
      title
      id
      description
      created_at
      status
    }
  }
`;

const DELETE_BLOG = gql`
  mutation deleteBlog($id: Int!) {
    deleteBlog(id: $id)
  }
`;

function Blog() {
  const { push } = useHistory();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [id, setId] = useState("");

  const [deleteBlog] = useMutation(DELETE_BLOG, {
    refetchQueries: [{ query: "listBlog" }],
  });

  const showModal = (id) => {
    setId(id);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDelete = (id) => {
    alert("Are you sure!");
    console.log(id);
    deleteBlog({
      variables: {
        id: Number(id),
      },
    });
    push("./");
  };

  const { data, loading } = useQuery(BLOGS, {
    refetchQueries: [{ query: "listBlog" }],
  });
  // console.log(data);

  if (loading || data === undefined) return <div>Loading data...</div>;

  return (
    <div>
      <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={data.listBlog}
        renderItem={(item) => {
          return (
            <List.Item
              actions={[
                <a key="list-loadmore-edit" onClick={() => showModal(item.id)}>
                  edit
                </a>,
                <a
                  key="list-loadmore-more"
                  onClick={() => handleDelete(item.id)}
                  style={{ color: "red" }}
                >
                  delete
                </a>,
              ]}
            >
              <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                  title={<a href="https://ant.design">{item.title}</a>}
                  description={
                    <div
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></div>
                  }
                />
              </Skeleton>
            </List.Item>
          );
        }}
      />
      <Modal
        title="Edit Post"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <EditBlog id={id} />
      </Modal>
    </div>
  );
}

export default Blog;

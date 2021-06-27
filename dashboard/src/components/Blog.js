import React, { useState } from "react";
import { List, Input, Form, Skeleton, Modal } from "antd";
import { useQuery, gql } from "@apollo/client";
import EditBlog from "./EditBlog";
const BLOGS = gql`
  {
    listBlog
  }
`;

function Blog() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [id, setId] = useState("");

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

  const { data, loading } = useQuery(BLOGS);
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
                <a key="list-loadmore-more">delete</a>,
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

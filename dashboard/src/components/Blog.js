import React from "react";
import { List, Avatar, Button, Skeleton } from "antd";
import { useQuery, gql } from "@apollo/client";

const BLOGS = gql`
  {
    listBlog
  }
`;

// const data = [
//   { title: "This is title", subtitle: "This is subtitle" },
//   { title: "This is title 2" },
// ];

function Blog() {
  const { data, loading } = useQuery(BLOGS);
  console.log(data);

  if (loading || data === undefined) return <div>Loading data...</div>;

  return (
    <div>
      <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={data.listBlog}
        renderItem={(item) => (
          <List.Item
            actions={[
              <a key="list-loadmore-edit">edit</a>,
              <a key="list-loadmore-more">delete</a>,
            ]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                title={<a href="https://ant.design">{item.title}</a>}
                description={item.description}
              />
            </Skeleton>
          </List.Item>
        )}
      />
    </div>
  );
}

export default Blog;

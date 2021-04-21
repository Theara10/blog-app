import React from "react";
import "./BlogDetail.css";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/client";

import { CalendarOutlined } from "@ant-design/icons";

const GET_BLOG_DETAIL = gql`
  query blogDetail($id: Int!) {
    blogDetail(id: $id)
  }
`;

function BlogDetail(props) {
  const { data, loading } = useQuery(GET_BLOG_DETAIL, {
    variables: { id: Number(props.match.params.id) },
  });

  if (loading) return <div>loading..</div>;
  console.log(data);
  return (
    <div className="blog_detail_container">
      <div>
        <h2 className="title">{data.blogDetail.title}</h2>
        <p style={{ paddingBottom: 10 }}>
          <span style={{ paddingRight: 10 }}>
            <CalendarOutlined />
          </span>
          April 23, 2021
        </p>
        <img className="blog_detail_img" src={data.blogDetail.image} />
      </div>
      <div>
        <div>
          <p className="description">{data.blogDetail.description}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;

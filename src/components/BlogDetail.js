import React from "react";
import "./BlogDetail.css";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/client";

import { CalendarOutlined } from "@ant-design/icons";
import Footer from "./Footer";

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
    <div className="post-detail">
      <h2 className="post-detail-title">{data.blogDetail.title}</h2>

      <div>
        <p className="post-detail-description">
          {
            <div
              dangerouslySetInnerHTML={{
                __html: data.blogDetail.description,
              }}
            ></div>
          }
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default BlogDetail;

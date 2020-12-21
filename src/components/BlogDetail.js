import React from "react";
import "./BlogDetail.css";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/client";

const GET_BLOG_DETAIL = gql`
  query blogDetail($id: String!){
    blogDetail(id: $id)
  }
`;

function BlogDetail() {
  const { data, loading } = useQuery(GET_BLOG_DETAIL);
  if (loading) return <div>loading..</div>;
  return (
    <div className="blog_detail_container">
      <div>
        <img
          className="blog_detail_img"
          src="https://www.komar.de/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/S/H/SHX8-087_1568286487.jpg"
        />
      </div>
      <div>
        <h2>Why democracy is hacked</h2>

        <div>
          <p>
            The secret to happiness The secret to happiness The secret to The
            secret to happiness The secret to happiness happiness
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;

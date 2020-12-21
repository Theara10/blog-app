import React from "react";
import "./BlogDetail.css";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/client";

const GET_BLOG_DETAIL = gql`
  query blogDetail($id: Int!){
    blogDetail(id: $id)
  }
`;

function BlogDetail(props) {
  const { data, loading } = useQuery(GET_BLOG_DETAIL, { variables: {id: Number(props.match.params.id)} });
  
  if (loading) return <div>loading..</div>;
  console.log(data)
  return (  
    <div className="blog_detail_container">
      <div>
        <img
          className="blog_detail_img"
          src={data.blogDetail.image}
        />
      </div>
      <div>
        <h2>{data.blogDetail.title}</h2>

        <div>
          <p>
            {data.blogDetail.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;

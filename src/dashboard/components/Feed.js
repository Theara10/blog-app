import React from "react";
import Content from "./Content";
import "./Feed.css";
import { useQuery } from "@apollo/client";
import Row from "./Row";
// import { gql } from "apollo-boost";

// const GET_BLOG = gql`
//   {
//     listBlog
//   }
// `;

function Feed() {
  // const { data, loading } = useQuery(GET_BLOG);
  return (
    <div className="feed">
      <table className="table_content">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Author</th>
            <th>Created_at</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <Row />
        </tbody>
      </table>
    </div>
  );
}

export default Feed;

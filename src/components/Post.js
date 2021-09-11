import { red } from "@material-ui/core/colors";
import React from "react";
import "./Post.css";
import { List, message, Avatar, Spin } from "antd";
import { gql, useQuery } from "@apollo/client";
import moment from "moment";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const GET_BLOG = gql`
  {
    listBlog
  }
`;

function Post() {
  const { data, loading } = useQuery(GET_BLOG);
  if (loading) return <div>Loading...</div>;

  return (
    <div className="posts">
      <h1>Posts</h1>
      <div className="post-list">
        <h2 className="post-list-left">2021</h2>
        <div>
          {data.listBlog.map((x) => {
            return (
              <div className="post-list-right">
                <div className="post-title">
                  <Link className="link" to={"/blog-detail/" + x.id}>
                    <p>{x.title}</p>
                  </Link>
                  <p className="post-date">
                    {moment(x.created_at).format("MMM Do ")}{" "}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Post;

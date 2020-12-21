import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

import { gql } from "apollo-boost";
import { Query } from "@apollo/react-components";
import { useQuery } from "@apollo/client";

const GET_BLOG = gql`
  {
    listBlog
  }
`;

export default function Blog() {
  const { data, loading } = useQuery(GET_BLOG);
  if (loading) return <div>Loading...</div>;
  return (
    <div className="blog_container">
      {data.listBlog.map((x) => {
        return (
          <div className="blog_display">
            <div className="blog_img">
              <Link to={"/blog-detail/"+x.id}>
                <img src={x.image} className="image"/>
              </Link>
            </div>

            <div className="blog_text">
              <div>
                <p className="blog_title">
                  <Link to="/blog-detail" className="blog_title_link">
                    {x.title}
                  </Link>
                </p>
              </div>
              <div>
                <p className="blog_sub_title">{x.description}</p>
              </div>
              <div className="blog_time">
                <CalendarTodayIcon fontSize="5" />
                <p className="blog_date">Jan 4, 2020</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
  // return (
  //   <div className="blog_container">
  //     <Query query={GET_BLOG}>
  //       {({ data, loading }) => {
  //         if (loading || data === undefined) return <div>data loading...</div>;
  //         return (
  //           <div>

  //           </div>
  //         );
  //       }}
  //     </Query>
  //   </div>
  // );
}

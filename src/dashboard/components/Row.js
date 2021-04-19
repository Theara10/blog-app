import React from "react";
import { useQuery } from "@apollo/client";
import { gql } from "apollo-boost";
import "./Row.css";
import { Link } from "react-router-dom";

const GET_BLOG = gql`
  {
    listBlog
  }
`;

function Truncate(value, condition) {
  return value.length > condition ? value.slice(0, condition) + "..." : value;
}

function Row() {
  const { data, loading } = useQuery(GET_BLOG);
  if (loading) return <div>loading..</div>;
  return (
    <>
      {data.listBlog.map((x) => {
        return (
          <>
            <tr>
              <td>{x.id}</td>
              <td className="td_title">
                <div className="title">
                  <div className="content_img">
                    <img src={x.image} width="40" height="40" />
                  </div>

                  <h4 className="title_text">{Truncate(x.title, 20)}</h4>
                </div>
              </td>
              <td>Theara</td>
              <td></td>
              <td style={{ display: "flex" }}>
                <div style={{ marginRight: 10 }}>
                  <p>
                    <Link to="/edit">Edit</Link>
                  </p>
                </div>
                <div>
                  <p style={{ color: "red" }}>Delete</p>
                </div>
              </td>
            </tr>
          </>
        );
      })}
    </>
  );
}

export default Row;

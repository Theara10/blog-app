import React from "react";
import Content from "./Content";
import "./Feed.css";

function Feed() {
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
          <tr>
            <td>1</td>
            <td>
              <Content />
            </td>
            <td>Theara</td>
            <td></td>
            <td style={{ display: "flex" }}>
              <div style={{ marginRight: 10 }}>
                <p>Edit</p>
              </div>
              <div>
                <p style={{ color: "red" }}>Delete</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <Content />
            </td>
            <td>Theara</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Feed;

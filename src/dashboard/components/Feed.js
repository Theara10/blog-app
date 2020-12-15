import React from "react";
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
              <div className="table_title">
                <div>
                  <img
                    src="https://miro.medium.com/max/3840/1*m0WhaDKwpzt6fqsOOcCPig.jpeg"
                    width="50"
                    height="50"
                  />
                </div>
                <div>
                  <h4>This is title</h4>
                  <p>this is subtitle</p>
                </div>
              </div>
            </td>
            <td>Theara</td>
          </tr>
          <tr>
            <td>1</td>
            <td>this is title</td>
            <td>Theara</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Feed;

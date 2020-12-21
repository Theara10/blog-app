import React from "react";
import "./Content.css";

function Content() {
  return (
    <div className="content">
      <div className="content_img">
        <img
          src="https://miro.medium.com/max/3840/1*m0WhaDKwpzt6fqsOOcCPig.jpeg"
          width="50"
          height="50"
        />
      </div>
      <div className="content_text">
        <h4 className="title">This is title</h4>
        <p className="sub_title">this is subtitle</p>
      </div>
    </div>
  );
}

export default Content;

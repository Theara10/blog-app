import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useQuery, gql, useMutation } from "@apollo/client";
import { Button } from "antd";
import { Form, Input } from "antd";
import { useHistory } from "react-router-dom";

const CREATE_BLOG = gql`
  mutation createBlog($data: BlogInput) {
    createBlog(data: $data)
  }
`;

const BLOGS = gql`
  {
    listBlog {
      title
      id
      description
      created_at
      status
    }
  }
`;

function AddBlog() {
  const { push } = useHistory();
  const [createBlog] = useMutation(CREATE_BLOG, {
    onCompleted: (res) => {
      if (res.createBlog) {
        push("./");
      }
    },
    refetchQueries: [{ query: "listBlog" }],
  });
  const [input, SetInput] = useState("");
  const [title, setTitle] = useState("");

  const onFinish = (x) => {
    // console.log(x);
    createBlog({
      variables: {
        data: {
          title: title,
          description: input,
        },
      },
      refetchQueries: ["listBlog"],
    });
  };

  return (
    <div>
      <form>
        <h3>Title:</h3>
        <input
          onChange={(e) => setTitle(e.target.value)}
          className="input-title"
        />
      </form>

      <h3>Description:</h3>
      <CKEditor
        editor={ClassicEditor}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          SetInput(data);
          // console.log(input);
        }}
      />

      <Button onClick={onFinish}>Submit</Button>
    </div>
  );
}

export default AddBlog;

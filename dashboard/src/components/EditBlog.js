import React, { useState } from "react";
import { List, Input, Form, Skeleton, Modal } from "antd";
import { useQuery, gql, useMutation } from "@apollo/client";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const QUERY = gql`
  query blogDetail($id: Int!) {
    blogDetail(id: $id)
  }
`;

const UPDATE_BLOG = gql`
  mutation updateBlog($id: Int!, $data: BlogInput) {
    updateBlog(id: $id, data: $data)
  }
`;

function EditBlog(props) {
  const [titleInput, setTitleInput] = useState("");
  const [descriptInput, setDescriptInput] = useState("");
  const { data, loading } = useQuery(QUERY, {
    variables: {
      id: Number(props.id),
    },
    fetchPolicy: "no-cache",
    onCompleted: (res) => {
      console.log(res);
      setTitleInput(res.blogDetail.title);
      setDescriptInput(res.blogDetail.description);
    },
  });
  const [updateBlog] = useMutation(UPDATE_BLOG, {
    onCompleted: (res) => {
      if (res === null) {
        alert("unsuccessful");
      } else {
        alert("successful");
      }
    },
  });

  const onFinish = (e) => {
    e.preventDefault();
    const data = {
      title: titleInput,
      description: descriptInput,
    };

    updateBlog({
      variables: {
        id: Number(props.id),
        data,
      },
    });
  };

  if (loading || !data) return <div>Waiting...</div>;

  return (
    <div>
      <form>
        <h3>Title:</h3>
        <input
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
          style={{ width: 400 }}
        />
      </form>
      <h3>Description:</h3>
      <CKEditor
        editor={ClassicEditor}
        data={descriptInput}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setDescriptInput(data);
          // SetInput(data);
          // console.log(input);
        }}
      />
      <button onClick={onFinish}>Save</button>
    </div>
  );
}

export default EditBlog;

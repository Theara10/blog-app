import React, { useState } from "react";
import EditorJs from "react-editor-js";

import Header from "@editorjs/header";

const EDITOR_JS_TOOLS = {
  header: Header,
};

function Contact() {
  const [data, setData] = useState(dataDummy);
  return (
    <div>
      <EditorJs data={data} tools={EDITOR_JS_TOOLS} />;
      
    </div>
  );
}

const dataDummy = {
  time: 1556098174501,
  blocks: [],
  version: "2.12.4",
};

export default Contact;

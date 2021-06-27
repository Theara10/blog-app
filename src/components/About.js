import React, { useState, useEffect } from "react";
import "./About.css";
import { Tabs, Button } from "antd";
import { map } from "cheerio/lib/api/traversing";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const handleTab = () => {
  const data = [{ content: "content 1", tab: "tab 1" }];
  data.push({ content: "content 1", tab: "tab 1" });
  data.push({ content: "content 2", tab: "tab 2" });
  console.log(data);

  localStorage.setItem("tab", JSON.stringify(data));
};

function About() {
  const [tab, setTab] = useState("");
  const [item, setItem] = useState("");

  useEffect(() => {
    const result = localStorage.getItem("tab");
    console.log(result);
    setItem(JSON.parse(result));
  });

  console.log(item);

  return (
    <div className="about_container">
      <Tabs defaultActiveKey="1" onChange={callback}>
        {item.map((x, i) => {
          return (
            <TabPane tab={x.tab} key={i}>
              {x.content}
            </TabPane>
          );
        })}
      </Tabs>
      <div style={{ paddingTop: 50 }}>
        <Button onClick={handleTab} type="primary">
          New
        </Button>
      </div>
    </div>
  );
}

export default About;

// create array of tab
// set array to local storage
// when click push more tab object to array
// get tab data from local storage then display it

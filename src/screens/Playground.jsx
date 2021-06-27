import React, { useState } from "react";
import { Button, Tabs } from "antd";
import { PlusOutlined } from "@ant-design/icons";

function TabLayout({ tab }) {
  return <div>{tab.name}</div>;
}

function TableContainer({ onClikTab }) {
  const [tab, setTab] = useState([]);

  return (
    <div>
      <Tabs defaultActiveKey={0}>
        {tab.map((x, i) => {
          return (
            <Tabs.TabPane key={i} onClick={() => onClikTab(x)} tab={x.name}>
              {x.name}
            </Tabs.TabPane>
          );
        })}
      </Tabs>
      <Button
        icon={<PlusOutlined />}
        onClick={() => setTab([...tab, { name: `New Tab ${tab.length + 1}` }])}
      />
    </div>
  );
}

export default function () {
  const [tabSelect, setTabSelect] = useState({});
  return (
    <div>
      <TableContainer onClikTab={(e) => setTabSelect(e)} />
      <TabLayout tab={tabSelect} />
    </div>
  );
}

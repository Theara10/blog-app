import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Navbar() {
  return (
    <Header className="header">
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">
          <Link to="/">
            <div className="logo">/ $ cd /home/</div>
          </Link>
        </Menu.Item>
        <Menu.Item key="1" className="about">
          About
        </Menu.Item>
        <Menu.Item key="2" className="post">
          <Link to="/post">Post</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default Navbar;

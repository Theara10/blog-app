import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import "./Blog.css";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaMediumM,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import Footer from "./Footer";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Blog() {
  return (
    <>
      <div className="blog-container">
        <h2>Hello friend.</h2>
        <div className="home-intro">
          <p className="me">
            This is my attempt to put some ideas and thoughts into writing. The
            purpose of this is just to 1). Practise my programming by building
            this website and 2). I hope to get things clearer by putting
            thoughts into words. And if you ever find this site and read some
            posts, hope you get something useful from it. cheers!
          </p>
        </div>
        <div>
          <div className="footer-social-media">
            <a href="https://www.facebook.com/koompi/" target="_blank">
              <FaFacebookF />
            </a>
            <a href="https://t.me/koompi" target="_blank">
              <FaTelegramPlane />
            </a>
            <a href="https://www.linkedin.com/company/koompi" target="_blank">
              <FaLinkedinIn />
            </a>
            <a href="https://twitter.com/koompi_official" target="_blank">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;

// import React from "react";
// import "./Blog.css";
// import { Link } from "react-router-dom";
// import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

// import { gql } from "apollo-boost";
// import { Query } from "@apollo/react-components";
// import { useQuery } from "@apollo/client";

// import { List, Avatar, Space } from "antd";
// import { CalendarOutlined, TagOutlined } from "@ant-design/icons";
// import moment from "moment";

// const GET_BLOG = gql`
//   {
//     listBlog
//   }
// `;

// const listData = [];
// for (let i = 0; i < 23; i++) {
//   listData.push({
//     href: "https://ant.design",
//     title: `ant design part ${i}`,
//     avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
//     description: "2021-12-11",
//     content:
//       "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
//   });
// }

// const IconText = ({ icon, text }) => (
//   <Space>
//     {React.createElement(icon)}
//     {text}
//   </Space>
// );

// export default function Blog() {
//   const { data, loading } = useQuery(GET_BLOG);
//   if (loading) return <div>Loading...</div>;
//   console.log(data);
//   return (
//     <div className="blog_container">
//       <p style={{ fontWeight: "bold", fontSize: 18, textAlign: "center" }}>
//         Posts
//       </p>
//       <List
//         itemLayout="vertical"
//         size="large"
//         dataSource={data.listBlog}
//         footer={
//           <div>
//             <b>Footer</b> path
//           </div>
//         }
//         renderItem={(item) => (
//           <List.Item
//             key={item.id}
//             actions={[
//               <IconText
//                 icon={CalendarOutlined}
//                 text={moment(item.created_at).format("MMM Do,  YYYY")}
//                 key="list-vertical-star-o"
//               />,

//               <IconText
//                 icon={TagOutlined}
//                 text="Book"
//                 key="list-vertical-message"
//               />,
//             ]}
//             // extra={<img alt="logo" src={item.image} />}
//           >
//             <List.Item.Meta
//               title={
//                 <a href={item.href}>
//                   <Link className="link" to={"/blog-detail/" + item.id}>
//                     {
//                       <div
//                         dangerouslySetInnerHTML={{ __html: item.title }}
//                       ></div>
//                     }
//                   </Link>
//                 </a>
//               }
//             />
//             <p className="description">
//               {
//                 <div
//                   dangerouslySetInnerHTML={{ __html: item.description }}
//                 ></div>
//               }
//             </p>
//           </List.Item>
//         )}
//       />
//     </div>
//   );
// }

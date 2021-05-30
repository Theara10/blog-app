import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

import { gql } from "apollo-boost";
import { Query } from "@apollo/react-components";
import { useQuery } from "@apollo/client";

import { List, Avatar, Space } from "antd";
import { CalendarOutlined, TagOutlined } from "@ant-design/icons";
import moment from "moment";

const GET_BLOG = gql`
  {
    listBlog
  }
`;

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: "https://ant.design",
    title: `ant design part ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description: "2021-12-11",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  });
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export default function Blog() {
  const { data, loading } = useQuery(GET_BLOG);
  if (loading) return <div>Loading...</div>;
  console.log(data);
  return (
    <div className="blog_container">
      <p style={{ fontWeight: "bold", fontSize: 18, textAlign: "center" }}>
        Posts
      </p>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={data.listBlog}
        footer={
          <div>
            <b>Footer</b> path
          </div>
        }
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[
              <IconText
                icon={CalendarOutlined}
                text={moment(item.created_at).format("MMM Do,  YYYY")}
                key="list-vertical-star-o"
              />,

              <IconText
                icon={TagOutlined}
                text="Book"
                key="list-vertical-message"
              />,
            ]}
            // extra={<img alt="logo" src={item.image} />}
          >
            <List.Item.Meta
              title={
                <a href={item.href}>
                  <Link className="link" to={"/blog-detail/" + item.id}>
                    {item.title}
                  </Link>
                </a>
              }
            />
            <p className="description">{item.description}</p>
          </List.Item>
        )}
      />
    </div>
  );
}

// const GET_BLOG = gql`
//   {
//     listBlog
//   }
// `;

// export default function Blog() {
//   const { data, loading } = useQuery(GET_BLOG);
//   if (loading) return <div>Loading...</div>;
//   return (
//     <div className="blog_container">
//       {data.listBlog.map((x) => {
//         return (
//           <div className="blog_display">
//             <div className="blog_img">
//               <Link to={"/blog-detail/"+x.id}>
//                 <img src={x.image} className="image"/>
//               </Link>
//             </div>

//             <div className="blog_text">
//               <div>
//                 <p className="blog_title">
//                   <Link to="/blog-detail" className="blog_title_link">
//                     {x.title}
//                   </Link>
//                 </p>
//               </div>
//               <div>
//                 <p className="blog_sub_title">{x.description}</p>
//               </div>
//               <div className="blog_time">
//                 <CalendarTodayIcon fontSize="5" />
//                 <p className="blog_date">Jan 4, 2020</p>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );

// }

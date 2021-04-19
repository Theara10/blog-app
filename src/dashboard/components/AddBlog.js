// import React from "react";
// import { useMutation, gql } from "@apollo/client";

// const CREATE_BLOG = gql`
//   mutation createBlog($data: BlogInput) {
//     createBlog(data: $data)
//   }
// `;

// export function AddBlog() {
//   let title;
//   let description;

//   const [createBlog] = useMutation(CREATE_BLOG);

//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault(),
//           createBlog({
//             variables: {
//               data: {
//                 title: title.value,
//                 description: description.value,
//               },
//             },
//           });
//       }}
//     >
//       <input
//         placeholder="title"
//         ref={(value) => {
//           title = value;
//         }}
//       />
//       <input
//         placeholder="description"
//         ref={(value) => {
//           description = value;
//         }}
//       />
//       {/* <input placeholder="author" ref={} />
//       <input placeholder="image" ref={} /> */}
//       <button>Send</button>
//     </form>
//   );
// }

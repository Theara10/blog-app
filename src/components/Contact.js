import React from "react";
import "./Contact.css";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/client";

// const CREATE_CONTACT = gql`
//   CreateContact($data: ContactInputType){
//     createContact(data: $data)
//   }
// `;

function Contact() {
  let input;
  // const [createContact, {data}] = useMutation(CREATE_CONTACT)
  return (
    <form
      className="contact_container"
      onSubmit={(e) => {
        // e.preventDefault();
        // createContact({
        //   variables: {
        //     name: input.value,
        //   },
        // });
        // input.value = "";
      }}
    >
      <h1>Send me a message</h1>
      <div className="contact_input">
        <input
          placeholder="Name"
          ref={(node) => {
            input = node;
          }}
        />
      </div>
      <div className="contact_input">
        <input placeholder="Email" />
      </div>
      <div className="contact_input">
        <textarea placeholder="Message" type="text" />
      </div>
      <div className="contact_button">
        <button>Send</button>
      </div>
    </form>
  );
}

export default Contact;

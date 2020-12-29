import React from "react";
import "./Contact.css";
import { useMutation, gql } from "@apollo/client";

const CREATE_CONTACT = gql`
  mutation createContact($data: ContactInputType){
    createContact(data: $data)
  }
`;

function Contact() {
  let name;
  let email;
  let message;
  const [createContact] = useMutation(CREATE_CONTACT)
  return (
    <form
      className="contact_container"
      onSubmit={(e) => {
        e.preventDefault();
        createContact({
          variables: {
           data: {
            name: name.value,
            email: email.value,
            message: message.value
           }
          },
        });
        name.value = "";
      }}  
    >
      <h1>Send me a message</h1>
      <div className="contact_input">
        <input
          placeholder="Name"
          ref={(node) => {
            name = node;
          }}
        />
      </div>
      <div className="contact_input">
        <input 
          placeholder="Email"
          ref={(node) => {
            email = node;
          }}
         />
      </div>
      <div className="contact_input">
        <input 
          placeholder="Message" 
          type="text" 
          ref={(node) => {
            message = node;
          }}/>
      </div>
      <div className="contact_button">
        <button>Send</button>
      </div>
    </form>
  );
}

export default Contact;

import React, { useState } from "react";
import "./Contact.css";
import { useMutation, gql } from "@apollo/client";
import Modal from "react-modal";

const CREATE_CONTACT = gql`
  mutation createContact($data: ContactInputType) {
    createContact(data: $data)
  }
`;

function Contact() {
  let name;
  let email;
  let message;
  const [createContact] = useMutation(CREATE_CONTACT);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <form
        className="contact_container"
        onSubmit={(e) => {
          e.preventDefault();
          createContact({
            variables: {
              data: {
                name: name.value,
                email: email.value,
                message: message.value,
              },
            },
          });

          setModalIsOpen(true);
          setTimeout(() => {
            setModalIsOpen(false);
          }, 2000);
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
            }}
          />
        </div>
        <div className="contact_button">
          <button>Send</button>
        </div>
      </form>

      <Modal isOpen={modalIsOpen} className="modal">
        <div>Message Sent</div>
      </Modal>
    </div>
  );
}

export default Contact;

import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <form className="contact_container">
      <h1>Send me a message</h1>
      <div className="contact_input">
        <input placeholder="Name" />
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

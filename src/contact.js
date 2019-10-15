import React from "react";
import "./styles/contact.css";


function Contact() {

  return (
    <div className="contact">

      <div className="topbar">

        <div className="topbar-buttons">
          <div className="topbar-button exit"></div>
          <div className="topbar-button minimize"></div>
          <div className="topbar-button maximize"></div>
        </div>

        <div className="titlebar">
          Contact Information
        </div>

        <div className="mac-symbols">&#8997;&#8984;1</div>

      </div>

      <div className="contact-body">
        Feel free to contact me through any of the below:
      </div>
    </div>
  )
}

export default Contact;

import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <div className="contact-pages">
        <div className="title">
          <h3>Contact Us</h3>
        </div>
        <p className="centered-text">
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </p>
      </div>
      <div className="submitcontact">
        <form className="form-submitcontact">
          <div className="row-item">
            <div className="item">
              <label>Name</label>
              <input
                className="input-style"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="item">
              <label>Email</label>
              <input
                className="input-style"
                type="text"
                placeholder="Enter email address"
              />
            </div>
          </div>
          <div className="row-item">
            <div className="item">
              <label>Subject</label>
              <input
                className="input-style"
                type="text"
                placeholder="Write a subject"
              />
            </div>
          </div>
          <div className="item-row">
            <label>Message</label>
            <input
              className="input-stylecontact"
              name=""
              id=""
              cols=""
              rows="10"
              placeholder="Write your message"
            />
          </div>
          <div className="item-row">
            <input
              className="submit-button"
              type="submit"
              name="Send"
              value="Send"
              id=""
              cols=""
              rows="10"
            />
          </div>
        </form>
      </div>
      <div className="contact-method">
        <div className="call-us">
          <h4>Call Us:</h4>
          <p>+1-234-567-8900</p>
        </div>
        <div className="hours">
          <h4>Hours:</h4>
          <p>Mon-Fri: 11am - 8pm</p>
          <span>Sat, Sun: 9am - 10pm</span>
        </div>
        <div className="our-location">
            <h4>Our Location:</h4>
            <p>123 Bridge Street</p>
            <span>Nowhere Land, LA 12345</span>
            <span>United States</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;

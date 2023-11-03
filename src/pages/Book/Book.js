import React from "react";
import "./Book.css";

function Book() {
  return (
    <div>
      <div className="text">
        <div className="title">
          <h3>BOOK A TABLE</h3>
        </div>
        <p className="centered-text">
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens
        </p>
      </div>
      
      <div className="container">
        <div
          className="map-container"
          style={{ width: "100%", marginTop: "50px" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
            width="100%"
            height="400"
            frameborder="0"
          ></iframe>
          <form className="form-submit">
            <div className="row-item">
              <div className="item">
                <label>Date</label>
                <input
                  className="input-style"
                  type="text"
                  placeholder="09/07/2001"
                />
              </div>
              <div className="item">
                <label>Time</label>
                <input
                  className="input-style"
                  type="text"
                  placeholder="17:15"
                />
              </div>
            </div>
            <div className="row-item">
              <div className="item">
                <label>Phone</label>
                <input
                  className="input-style"
                  type="text"
                  placeholder="xxxxxxxxx"
                />
              </div>
              <div className="item">
                <label>Total Person</label>
                <input
                  className="input-style"
                  name=""
                  id=""
                  cols=""
                  rows="10"
                  placeholder="1 person"
                />
              </div>
            </div>
            <div className="item-row">
              <label>Total Person</label>
              <input
                className="input-style"
                name=""
                id=""
                cols=""
                rows="10"
                placeholder="1 person"
              />
            </div>
            <div className="item-row">
              <input
                className="submit-button"
                type="submit"
                name="Book A Table"
                value="Book A Table"
                id=""
                cols=""
                rows="10"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Book;

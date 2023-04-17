import React, { useEffect, useState } from "react";
import "../assets/style/contact/contact.scss";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FiHome } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
  const [contactInfo, setContactInfo] = useState({});
  const navigate = useNavigate();
  const contactInfoFetching = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const data = await response.json();
      setContactInfo(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    contactInfoFetching();
  }, []);
  const navigateUser = () => {
    navigate("/message");
  };
  console.log(contactInfo);
  return (
    <div className="contact">
      <div className="contact__slogan">
        <h2>Get In Touch</h2>
      </div>
      <div className="contact__box">
        <div className="contact__info">
          <h4>Contact Info</h4>
          <h5>
            <span>
              <BsTelephone />
            </span>

            {contactInfo?.phone}
          </h5>
          <h5>
            <span>
              <AiOutlineMail />
            </span>
            {contactInfo?.email}
          </h5>
          <h5>
            <span>
              <FiHome />
            </span>
            {contactInfo?.address?.street},
            <span>{contactInfo?.address?.city}</span>
          </h5>
        </div>
        <div className="contact__form">
          <form onSubmit={navigateUser}>
            <div className="form__details">
              <input
                type="text"
                name="fullname"
                placeholder="Enter Your Name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="form__message">
              <textarea
                name="message"
                cols="30"
                rows="5"
                placeholder="Enter Your Message"
              ></textarea>
            </div>

            <button type="submit">CONTACT NOW</button>
          </form>
        </div>
      </div>
    </div>
  );
};

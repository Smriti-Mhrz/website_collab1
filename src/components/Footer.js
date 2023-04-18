import React, {useState,useEffect}from "react";
// import '../assets/style/Footer.scss'
import logo from "../assets/images/logo.webp";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export const Footer = ()=>{
      const [contactInfo, setContactInfo] = useState({});
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
   
  return (
    <>
      <div className="footer__section">
        <div className="section__part tablet__part mb__part">
          <ul>
            <li>
              <img src={logo} alt="logo" />
            </li>
            <li>Gravida nibh vel velit auctor aliquetn</li>
            <li>quibibendum auci elit cons equat ipsutis sem nibh id elit.</li>
            <li className="icons">
              <i>
                <a>
                  <FaFacebook />
                </a>
              </i>
              <i>
                <a>
                  <FaTwitter />
                </a>
              </i>
              <i>
                <a>
                  <FaInstagram />
                </a>
              </i>
            </li>
          </ul>
        </div>
        <div className="section__part tablet__part mb__part">
          <ul>
            <li>
              <h3>Services</h3>
            </li>
            <li>Architecture Design</li>
            <li>Interior Design</li>
            <li>Autocad Services</li>
            <li>Lighting Design</li>
            <li>Poster Design</li>
          </ul>
        </div>
        <div className="section__part tablet__part mb__part">
          <ul>
            <li>
              <h3>Help</h3>
            </li>
            <li>Forum</li>
            <li>Blog</li>
            <li>Help Center</li>
            <li>Contact US</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="section__part tablet__part mb__part">
          <ul>
            <li>
              <h3>Contact Info</h3>
            </li>
            <li>
              <span>Phone:</span> 
            {contactInfo?.phone}
              <br />
            </li>
            <li>
              <span>Email:</span> {contactInfo?.email}              
            </li>
            <li>
              <span>Address:</span> {contactInfo?.address?.street},
            <span>{contactInfo?.address?.city}</span>
              
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

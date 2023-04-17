import React from "react";
import banner from "../assets/images/main_banner.webp";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";

export function Home() {
  return (
    <>
      <div className="hero_section">
        <div className="banner_section">
          <img src={banner} alt="main_banner" />
          <div className="banner__circle">
            <p>-50%</p>
            <p>Off</p>
          </div>
        </div>
        <div className="banner_desc">
          <h1>
            <span>Sofa</span> and <span>Armchairs</span>
          </h1>
          <p>
            One day however a small line of blind text by the name of Lorem
            Ipsum
            <br /> decided to leave for the far World of Grammar.
            <br />{" "}
          </p>
          <button>
            Learn More <RiArrowRightSLine />
          </button>
          <div className="social_media">
            <ul>
              <li>
                <a href="">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

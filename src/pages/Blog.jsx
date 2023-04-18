import React from "react";
import blogone from "../assets/images/blog/blog1.webp";
import blogtwo from "../assets/images/blog/blog2.webp";
import blogthree from "../assets/images/blog/blog3.webp";
import profile from "../assets/images/profile.webp";
import { FiShare } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";

export function Blog() {
  return (
    <>
      <div className="blog__container">
        <div className="blog__head">
          <h3>From The Blog</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>
        <div className="blog__body">
          <div className="body__section">
            <div className="profile_img">
            <img  src={blogone} alt="blog" />

            </div>
            <div className="content">
              <h4>
                <a>Rowan an orangutan known & loved</a>{" "}
              </h4>
              <span>25JULY, 2022</span>
              <div className="profile_desc">
                <img src={profile} alt="profile" />
                <p>J.PARKER</p>
                <i>
                  <FiShare />
                </i>
                <i>
                  <GrFavorite />
                </i>
              </div>
            </div>
          </div>
          <div className="body__section">
            <div className="profile_img">
            <img  src={blogtwo} alt="blog" />

            </div>
            <div className="content">
              <h4>
                <a>Rowan an orangutan known & loved</a>{" "}
              </h4>
              <span>25JULY, 2022</span>
              <div className="profile_desc">
                <img src={profile} alt="profile" />
                <p>J.PARKER</p>
                <i>
                  <FiShare />
                </i>
                <i>
                  <GrFavorite />
                </i>
              </div>
            </div>
          </div>
          <div className="body__section">
            <div className="profile_img">
            <img  src={blogthree} alt="blog" />

            </div>
            <div className="content">
              <h4>
                <a>Rowan an orangutan known & loved</a>{" "}
              </h4>
              <span>25JULY, 2022</span>
              <div className="profile_desc">
                <img src={profile} alt="profile" />
                <p>J.PARKER</p>
                <i>
                  <FiShare />
                </i>
                <i>
                  <GrFavorite />
                </i>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
}

import React from "react";
// import "../assets/style/team/team.scss";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FiTwitter } from "react-icons/fi";
import { BsFillPlayFill } from "react-icons/bs";
const teamMembers = [
  {
    name: "Yamima Moktan",
    title: "QA Engineer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    socialMedia: {
      facebook: <FaFacebookF />,
      instagram: <GrInstagram />,
      twitter: <FiTwitter />,
    },
  },
  {
    name: "Smriti Maharjan",
    title: "FrontEnd",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    socialMedia: {
      facebook: <FaFacebookF />,
      instagram: <GrInstagram />,
      twitter: <FiTwitter />,
    },
  },
  {
    name: "Anu Shrestha",
    title: "Android Developer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    socialMedia: {
      facebook: <FaFacebookF />,
      instagram: <GrInstagram />,
      twitter: <FiTwitter />,
    },
  },
  {
    name: "Kajal Acharya",
    title: "IOS Developer",
    image:
      "https://media.licdn.com/dms/image/D5603AQE3R_0Iz0CKOQ/profile-displayphoto-shrink_800_800/0/1676811152407?e=2147483647&v=beta&t=KQvHPvivpTlG80iq-2pvGV8Dlx2IKoL1yQe78Y32dUg",
    socialMedia: {
      facebook: <FaFacebookF />,
      instagram: <GrInstagram />,
      twitter: <FiTwitter />,
    },
  },
  {
    name: "Anisha Manandhar",
    title: "Designer",
    image:
      "https://media.licdn.com/dms/image/D5603AQE3R_0Iz0CKOQ/profile-displayphoto-shrink_800_800/0/1676811152407?e=2147483647&v=beta&t=KQvHPvivpTlG80iq-2pvGV8Dlx2IKoL1yQe78Y32dUg",
    socialMedia: {
      facebook: <FaFacebookF />,
      instagram: <GrInstagram />,
      twitter: <FiTwitter />,
    },
  },
  {
    name: "Himanshu Sharma",
    title: "Dot Net Developer",
    image:
      "https://media.licdn.com/dms/image/D5603AQE3R_0Iz0CKOQ/profile-displayphoto-shrink_800_800/0/1676811152407?e=2147483647&v=beta&t=KQvHPvivpTlG80iq-2pvGV8Dlx2IKoL1yQe78Y32dUg",
    socialMedia: {
      facebook: <FaFacebookF />,
      instagram: <GrInstagram />,
      twitter: <FiTwitter />,
    },
  },
];
export const Team = () => {
  return (
    <div className="team__wrapper">
      <div className="team__info">
        <h3>Our Expert Team</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm
          od tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="team__photos">
        {teamMembers.map((item) => {
          return (
            <div className="team__individual" key={item.name}>
              <img src={item.image} alt="name" />
              <h4>{item.name}</h4>
              <span>{item.title.toUpperCase()}</span>
              <ul>
                <li>{item.socialMedia.facebook}</li>
                <li>{item.socialMedia.instagram}</li>
                <li>{item.socialMedia.twitter}</li>
              </ul>
            </div>
          );
        })}
      </div>
      <div className="team__message">
        <div className="message mb__message tb__message">
          <p>
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            quod deleniti, similique dolorum cumque necessitatibus hic veritatis
            asperiores magnam."
          </p>
          <h4>Smriti Maharjan</h4>
          <span>Founder,Leader</span>
        </div>

        {/* <div className="video">
          <BsFillPlayFill />
        </div> */}
      </div>
    </div>
  );
};

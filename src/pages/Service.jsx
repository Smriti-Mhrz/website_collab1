import React from "react";
import "../assets/style/service/service.scss";
import { RiArrowRightSLine } from "react-icons/ri";
import { BsGrid } from "react-icons/bs";
import { TfiRulerPencil } from "react-icons/tfi";
import { MdOutlineCleanHands } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
const servicesIconDescription = [
  {
    icon: <BsGrid />,
    serviceName: "Furnitures",
    serviceDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <MdOutlineCleanHands />,
    serviceName: "Decorations",
    serviceDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <TfiRulerPencil />,
    serviceName: "Consultancy",
    serviceDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <BiMessageDetail />,
    serviceName: "Custom Orders",
    serviceDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
export const Service = () => {
  return (
    <div className="servicespage__wrapper">
      <div className="servicepage__ourstory">
        <h5>Our Story</h5>
        <h3>Build Your Sweet Home</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          porro nisi, excepturi maxime quae ipsam asperiores, libero mollitia
          reiciendis eum consequuntur ut perferendis voluptate odit a commodi,
          quibusdam aperiam accusamus.
        </p>
      </div>
      <div className="servicepage__servicesdisplay">
        <div className="servicesdisplay__image">
          <img
            src="https://preview.uideck.com/items/furnish-opl/assets/images/services/xservices.jpg.pagespeed.ic.irFtSm_Jn7.webp"
            alt="servicepage"
          />
          <button>
            Read More
            <RiArrowRightSLine />
          </button>
        </div>
        <div className="servicesdisplay__servicelist">
          {servicesIconDescription.map((item) => {
            return (
              <div className="servicesdescription" key={item.serviceName}>
                <i>{item.icon}</i>
                <h5>{item.serviceName}</h5>
                <p>{item.serviceDescription}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import image_one from "../assets/images/portfolio/image1.webp";
import image_two from "../assets/images/portfolio/image2.webp";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

export function Portfolio() {
  const [img, setImg] = useState(image_one);

  return (
    <>
      <div className="portfolio__wrapper">
        <div className="portfolio__desc">
          <h2>Showcase</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod tempo.
          </p>
        </div>
        <div className="portfolio__image">
          <div className="portfolio__arrow">
            <button onClick={() => setImg(image_two)}>
              <AiOutlineArrowLeft />
            </button>
            <button onClick={() => setImg(image_one)}>
              <AiOutlineArrowRight />
            </button>
          </div>
          <div className="portfolio_banner">
            <img src={img} alt="banner_one" />
          </div>
          <button className="portfolio__prev">Full Preview</button>
        </div>
      </div>
    </>
  );
}

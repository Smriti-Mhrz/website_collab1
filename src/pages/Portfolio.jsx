import React from 'react'
import "../assets/style/page/Portfolio.scss"
import image_one from "../assets/images/portfolio/image1.webp"
// import image_two from "../assets/images/portfolio/image2.webp"
import {AiOutlineArrowRight,AiOutlineArrowLeft} from "react-icons/ai"

export default function Portfolio() {
  return (
    <>
      <div className="portfolio__wrapper">
        <div className="portfolio__desc">
          <h1>Showcase</h1>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo.</p>
        </div>
        <div className="portfolio__image">
          <div className="portfolio__arrow">
          <button><AiOutlineArrowLeft/></button>
          <button><AiOutlineArrowRight/></button>

          </div>
            <img src={image_one} alt="banner_one" />
            {/* <img src={image_two} alt="banner_two" /> */}
            <button className='portfolio__prev'>Full Preview</button>
        </div>
      </div>
    </>
  )
}

import React from 'react'
import '../assets/style/page/Home.scss'
import banner from '../assets/images/main_banner.webp'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Home() {
  return (
    <div className='container__home'>
        <div className='image'>
          <img src={banner} alt="main_banner" />    
          {/* <div className="banner__circle">
            <p>-50% Off</p>
          </div>             */}
        </div>
        <div className='banner__desc'>
          <h1><span>Sofa</span> and <span>Armchairs</span></h1>
          <p>One day however a small line of blind text by the name of Lorem Ipsum<br/> decided to leave for the far World of Grammar.<br/> </p>
          <button>Learn More</button>
          <div className='social-media'>
              <ul>
                <li><FaFacebook/></li>
                <li><FaTwitter/></li>
                <li><FaInstagram/></li>
              </ul>
          </div>
        </div>
    </div>
  )
}

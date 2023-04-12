import React from 'react'
import '../assets/style/Footer.scss'
import logo from "../assets/images/logo.webp"
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'


export default function Footer() {
  return (
    <>
      <div className='container'>
        <div className='footer__section'>
          <div className='section_part'>
            <ul>
              <li><img src={logo} alt='logo'/></li>
              <li>Gravida nibh vel velit auctor aliquetn</li>
              <li>quibibendum auci elit cons equat ipsutis sem nibh id elit.</li>
              <li className='icons'>
                <FaFacebook/>
                <FaTwitter/>
                <FaInstagram/>
              </li>
            </ul>
          </div>
          <div className='section_part'>
            <ul>
              <li><h3>Services</h3></li>
              <li>Architecture Design</li>
              <li>Interior Design</li>
              <li>Autocad Services</li>
              <li>Lighting Design</li>
              <li>Poster Design</li>
            </ul>
          </div>
          <div className='section_part'>
            <ul>
              <li><h3>Help</h3></li>
              <li>Forum</li>
              <li>Blog</li>
              <li>Help Center</li>
              <li>Contact US</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          
          <div className='section_part'>
            <ul>
              <li><h3>Contact Info</h3></li>
              <li><span>Phone:</span> +88123 4567 890<br/></li>
              <li>
               <span>Email:</span> contact@yourmail.com<br/>support@yourmail.com
              </li>
              <li>
                <span>Address:</span> 5078 Jensen Key, Port<br/>Kaya, WV 73505
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

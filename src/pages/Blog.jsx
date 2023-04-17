import React from 'react'
import "../assets/style/page/Blog.scss"
import blogone from "../assets/images/blog/blog1.webp"
import profile from '../assets/images/profile.webp'
import { FiShare } from 'react-icons/fi'
import { GrFavorite } from 'react-icons/gr'

export default function Blog() {
  return (
    <>
        <div className="blog__container">
            <div className="blog__head">
                <h3>From The Blog</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
            <div className="blog__body">
                <div className="body__section">
                    <img className='profile_img' src={blogone} alt="blog" />
                    <div className="content">
                        <h4>
                           <a>Rowan an orangutan known & loved</a> </h4>
                        <span>25JULY, 2022</span>
                        <div className="profile_desc">
                            <img className='profile_img' src={profile} alt="profile" />
                            <p>J.PARKER</p>
                            <i><FiShare/></i>
                            <i><GrFavorite/></i>
                        </div>
                    </div>
                                    
                </div>
                <div className="body__section">
                    <img className='profile_img' src={blogone} alt="blog" />
                    <div className="content">
                    <h4><a>Rowan an orangutan known & loved</a></h4>
                        <span>25JULY, 2022</span>
                        <div className="profile_desc">
                            <img className='profile_img' src={profile} alt="profile" />
                            <p>J.PARKER</p>
                            <i><FiShare/></i>
                            <i><GrFavorite/></i>
                        </div>
                    </div>
                                    
                </div>
                <div className="body__section">
                    <img className='blog_img' src={blogone} alt="blog" />
                    <div className="content">
                        <h4><a>Rowan an orangutan known & loved</a></h4>
                        <span>25JULY, 2022</span>
                        <div className="profile_desc">
                            <img className='profile_img' src={profile} alt="profile" />
                            <p>J.PARKER</p>
                            <i><FiShare/></i>
                            <i><GrFavorite/></i>
                        </div>
                    </div>
                                    
                </div>
                
            </div>
        </div>
    </>
  )
}

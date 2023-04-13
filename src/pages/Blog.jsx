import React from 'react'
import "../assets/style/page/Blog.scss"
// import blogone from "../assets/images/blog/blog1.webp"

export default function Blog() {
  return (
    <>
        <div className="blog__container">
            <div className="blog__head">
                <h1>From The Blog</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
            <div className="blog__body">
                <div className="body__section">
                    {/* <img src={blogone} alt="blog" /> */}
                    
                </div>
            </div>
        </div>
    </>
  )
}

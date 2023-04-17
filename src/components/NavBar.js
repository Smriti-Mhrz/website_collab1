import React, { useState } from "react";
// import "../assets/style/NavBar.scss";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.webp";
import { FaBars, FaTimes } from "react-icons/fa";

export function NavBar() {
  const navList = [
    "Products",
    "Service",
    "Portfolio",
    "Team",
    "Blog",
    "Contact",
  ];
  const [click, setClick] = useState(false);
  const [mobileMenu, setMobileMenu] = useState("nav__menubar active");
  const toogleClass = () => {
    setMobileMenu("nav__menu");
    setClick(false);
  };
  const clickHandler = () => {
    setClick(!click);
    setMobileMenu("nav__menubar active");
  };

  return (
    <div className="nav_container">
      <div className="navbar__main">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className={`nav_list ${click ? mobileMenu : "nav__menu"}`}>
          <li>
            <NavLink to="/" onClick={() => toogleClass()}>
              Home{" "}
            </NavLink>
          </li>
          {navList.map((item, i) => {
            return (
              <li key={item}>
                <NavLink to={item} onClick={() => toogleClass()}>
                  {item}
                </NavLink>
              </li>
            );
          })}
        </ul>
        {/* <ul
          className={`mobile_menu ${
            click ? "nav__menubar active" : "nav__menu"
          }`}
        >
          <li>
            <NavLink to="/">Home </NavLink>
          </li>
          {navList.map((item, i) => {
            return (
              <li key={i}>
                <NavLink to={item}>{item}</NavLink>
              </li>
            );
          })}
        </ul> */}

        <div className="hamburger" onClick={() => clickHandler()}>
          {click ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
      </div>
    </div>
  );
}

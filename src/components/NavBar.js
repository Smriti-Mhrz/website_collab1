import React, { useState } from "react";
import "../assets/style/NavBar.scss";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.webp";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
  const navList = [
    "Products",
    "Service",
    "Portfolio",
    "Team",
    "Blog",
    "Contact",
  ];
  const [click, setClick] = useState(false);

  return (
    <div className="nav_container">
      <div className="navbar__main">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul
          className={`nav_list ${click ? "nav__menubar active" : "nav__menu"}`}        >
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
        </ul>
        <ul
          className={`mobile_menu ${
            click ? "nav__menubar active" : "nav__menu"
          }`}        >
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
        </ul>

        <div className="hamburger" onClick={() => setClick(!click)}>
          {click ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
      </div>
    </div>
  );
}

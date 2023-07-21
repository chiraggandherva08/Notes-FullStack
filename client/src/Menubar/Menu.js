import "./menu.css";
import React from "react";

const toggleMenu = () => {
  document.querySelector(".menu-bar-list").classList.toggle("toggled-menu-list");

  document.querySelector(".toggle-menu-btn").classList.toggle("toggled-menu-btn");
  document.querySelectorAll(".menu-bar-item")
    .forEach((menuitem) => {
      menuitem.classList.toggle("toggle-menu-items");
    })
}

const Menu = () => {
  return <React.Fragment>
    <nav id="menu-bar">
    </nav>
    <img className="toggle-menu-btn" src="assets/menu.svg" onClick={() => { toggleMenu() }} />
    <ul className="menu-bar-list">
      <li className="menu-bar-item"> Home</li>
      <li className="menu-bar-item">About Us</li>
      <li className="menu-bar-item">All Notes</li>
      <li className="menu-bar-item">Contact Us</li>
      <li className="menu-bar-item">Found Bug</li>
      <li className="menu-bar-item">Account</li>
    </ul>
  </React.Fragment>
}

export default Menu;
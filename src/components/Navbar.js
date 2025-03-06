import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/logo.jpeg";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      {/* Logo & Site Name (Top Left) */}
      <div className="logo-container">
        <img src={logo} alt="PawFinds Logo" className="logo" />
        <h1 className="logo-text">PawFinds</h1>
      </div>

      {/* Centered Navigation Links */}
      <div className="navbar">
        <NavLink to="/" className={({ isActive }) => isActive ? "navbar-item active" : "navbar-item"}>Home</NavLink>
        <NavLink to="/post-pet" className={({ isActive }) => isActive ? "navbar-item active" : "navbar-item"}>Services</NavLink>
        <NavLink to="/pets" className={({ isActive }) => isActive ? "navbar-item active" : "navbar-item"}>Pets</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "navbar-item active" : "navbar-item"}>Contact Us</NavLink>
      </div>

      {/* Give a Pet Button (Fixed Styling) */}
      <Link to="/post-pet" className="give-pet-button">Give a Pet</Link>
    </nav>
  );
};

export default Navbar;

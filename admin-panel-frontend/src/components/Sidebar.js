import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/sidebar.css";
import { FaTachometerAlt, FaFileAlt, FaUser, FaRegCreditCard } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">My Dashboard</div>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
            <div className="nav-item">
              <FaTachometerAlt className="icon" />
              <span>Dashboard</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/TaskManagement" className={({ isActive }) => (isActive ? "active-link" : "")}>
            <div className="nav-item">
              <FaFileAlt className="icon" />
              <span>Task Management</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/TestManagement" className={({ isActive }) => (isActive ? "active-link" : "")}>
            <div className="nav-item">
              <FaFileAlt className="icon" />
              <span>Test Management</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/UserProfile" className={({ isActive }) => (isActive ? "active-link" : "")}>
            <div className="nav-item">
              <FaUser className="icon" />
              <span>User Profile</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Subscriptions" className={({ isActive }) => (isActive ? "active-link" : "")}>
            <div className="nav-item">
              <FaRegCreditCard className="icon" />
              <span>Subscriptions</span>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

import React, { useState } from "react";
import { FaUser, FaFolder } from "react-icons/fa";
import "../assets/css/styles.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      {/* 📌 Move the Search Bar OUTSIDE navbar-right */}
      <div className="search-container">
        <input type="text" className="search-bar" placeholder="Search..." />
      </div>

      {/* 🔹 Right Section: Folder & Profile Icons */}
      <div className="navbar-right">
        {/* 📂 Folder Icon & Dropdown */}
        <div className="dropdown">
          <FaFolder className="icon dropbtn" onClick={toggleDropdown} />
          {dropdownOpen && (
            <div className="dropdown-content">
              <a href="#">File 1</a>
              <a href="#">File 2</a>
              <a href="#">File 3</a>
            </div>
          )}
        </div>

        {/* 👤 Profile Icon */}
        <FaUser className="profile-icon" onClick={() => window.location.href = "/profile"} />
      </div>
    </nav>
  );
};

export default Navbar;

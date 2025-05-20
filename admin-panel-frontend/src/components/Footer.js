import React from "react";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <footer className="footer text-center">
      <p>&copy; {new Date().getFullYear()} PA-Admin Panel. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;

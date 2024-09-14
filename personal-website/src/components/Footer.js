import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import GitHub and LinkedIn icons
import '../App.css'; // Import styles for the footer

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="https://github.com/LEllis0" target="_blank" rel="noopener noreferrer">
          <FaGithub className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/lewisjamesellis" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="footer-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
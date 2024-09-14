import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">About Me</Link>
        </li>
        <li className="navbar-item">
          <Link to="/services" className="navbar-link">Services</Link>
        </li>
        <li className="navbar-item">
          <Link to="/blog" className="navbar-link">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
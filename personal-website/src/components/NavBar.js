import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">About Me</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
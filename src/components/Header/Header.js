import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <nav className="orange accent-4">
    <div className="nav-wrapper">
      <NavLink to="/" className="brand-logo">Eat-Station</NavLink>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><NavLink exact to="/" activeClassName="active" >Home</NavLink></li>
        <li><NavLink to="/restaurants" >Restaurants</NavLink></li>
      </ul>
    </div>
  </nav>
);

export default Header;

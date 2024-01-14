import React, {  } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const Navbar = ({ toggleTheme }) => {

  return (
    <div id="navbar">
      <div className="container">
        <span id="name"></span>
        <span id="links">
          <NavLink to="/" exact activeClassName="active-link">
            HOME
          </NavLink>
          <NavLink to="/projects" activeClassName="active-link">
            PROJECTS
          </NavLink>
          <NavLink to="/contact" activeClassName="active-link">
            CONTACT
          </NavLink>
        </span>
        <button onClick={toggleTheme}>TOGGLE THEME</button>
      </div>
    </div>
  );
};

export default Navbar;

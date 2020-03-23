import React from 'react';
import './NavItem.css';
import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
  return(
    <li className="nav-item">
    <NavLink
      className="nav-link"
      to={props.href}
      exact> 
        {props.svg}
        <span className="link-text">{props.text}</span>
      </NavLink>
    </li>
  );
}

export default NavItem;
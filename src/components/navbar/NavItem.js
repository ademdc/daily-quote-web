import React from 'react';
import './NavItem.css';

const NavItem = (props) => {
  return(
    <li className="nav-item">
      <a href={props.href} className="nav-link">
      <i class="fas fa-home"></i>
      {props.svg}
      <span className="link-text">{props.text}</span>
      </a>
      
    </li>
  );
}

export default NavItem;
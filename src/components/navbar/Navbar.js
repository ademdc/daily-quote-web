import React from 'react';
import './Navbar.css';
import NavItem from './NavItem';
import Logo from './Logo';
import * as svgs from '../UI/svgs';

const Navbar = (props) => {
  return(
    <nav className="navbar">
        <ul className="navbar-nav">
          <Logo />
          <NavItem href='#' text='Home' svg={svgs.homeIcon}/>
          <NavItem href='#' text='Favorites' svg={svgs.starIcon}/>
          <NavItem href='#' text='Log in' svg={svgs.logoutIcon}/>
        </ul>
      </nav>
  );
}

export default Navbar;
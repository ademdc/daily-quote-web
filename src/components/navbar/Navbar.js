import React from 'react';
import './Navbar.css';
import NavItem from './NavItem';
import Logo from './Logo';
import * as svgs from '../UI/svgs';

const Navbar = (props) => {
  return(
    <div>
       <nav className="navbar">
        <ul className="navbar-nav">
          <Logo />
          <NavItem href='/home' text='Home' svg={svgs.homeIcon}/>
          <NavItem href='/favorites' text='Favorites' svg={svgs.starIcon}/>
          {props.isAuthenticated ? (
            <NavItem href='/logout' text='Logout' svg={svgs.logoutIcon}/>
          ) : (
            <NavItem href='/auth' text='Log in' svg={svgs.logoutIcon}/>
          )}
        </ul>
      </nav>
      {props.children}
    </div>
   
  );
}

export default Navbar;
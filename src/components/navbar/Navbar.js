import React from 'react';
import NavItem from './NavItem';
import Logo from './Logo';

import * as svgs from '../UI/svgs';

import './Navbar.css';

const Navbar = (props) => {
  return(
    <div>
       <nav className="navbar">
          <ul className="navbar-nav">
            <Logo />
            <NavItem href='/home' text='Home' svg={svgs.homeIcon}/>
            <NavItem href='/favorites' text='Favorites' svg={svgs.starIcon}/>
            {props.isAuthenticated ? (<NavItem href='/new' text='New Quote' svg={svgs.plusIcon}/>) : null }
            {props.isAuthenticated ? (<NavItem href='/quotes' text='All Quotes' svg={svgs.serachIcon}/>) : null }
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
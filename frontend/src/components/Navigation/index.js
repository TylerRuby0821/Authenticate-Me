import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>

        <NavLink className="nav_button" to="/login">Log In</NavLink>
        <NavLink className="nav_button"to="/signup">Sign Up</NavLink>

      </>
    );
  }

  return (
    <ul className="nav__ul">
      <li className='nav__li'>
        <NavLink className="nav_button" exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;

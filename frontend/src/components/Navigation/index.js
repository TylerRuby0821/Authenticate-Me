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
      <>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <div className="navBar__session">
          <NavLink className="nav__button--login" to="/login">Log In</NavLink>
          <NavLink className="nav__button--signup"to="/signup">Sign Up</NavLink>
        </div>


      </>
    );
  }

  return (
    <div className='header__container'>
      <header className="header__navBar">
        <div className="navBar__home">
          <div className='navBar__logo'>
            <NavLink className='letter__logo'exact to="/">J</NavLink>
          </div>
          <div className="navBar__search">
            <input className="nav__search" type="text" placeholder="Search Jumblur" />
            <button className="nav__search--button" type="submit">
              <i className="fa fa-search" />
            </button>
          </div>
        </div>
        {isLoaded && sessionLinks}
      </header>
    </div>



  );
}

export default Navigation;

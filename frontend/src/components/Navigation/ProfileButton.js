import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button onClick={openMenu}>
      <i className="fas fa-portrait"/>
      </button>
      {showMenu && (
        <div className="profile-dropdown">
          <div className="top__dropdown--container">
            <h2>Account</h2>
            <button onClick={logout}>Log Out</button>
          </div>
          <div className='li__user--name'>{user.email}</div>
        </div>
      )}
    </>
  );
}

export default ProfileButton;

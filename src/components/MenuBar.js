import React, { useState } from 'react';

import { FaBell, FaUserCircle } from 'react-icons/fa';
import '../styles/menuBar.scss';

const MenuBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="menu-bar-container">
      <div className="menu">
        <div>THE WALL</div>
      </div>
      <div className="profile-container">
      <FaBell className="icon" onClick={() => alert('Notifications on the way!')} />

        <FaUserCircle className="icon" onClick={toggleDropdown} />
        <div className={`dropdown ${dropdownOpen ? 'open' : ''}`}>
          <div className="dropdown-item">Profile</div>
          <div className="dropdown-item">Settings</div>
          <div className="dropdown-item">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;

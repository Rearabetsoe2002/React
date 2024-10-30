import React from 'react';
import './App.css';
import logo from './winn.jpg'; // Import logo image

function NavBar({ activeTab, setActiveTab }) {
  return (
    <nav>
      <ul>
        <li>
          <a href="#" className={activeTab === 'product' ? 'active' : ''} onClick={() => setActiveTab('product')}>Product Management</a>
        </li>
        <li>
          <a href="#" className={activeTab === 'user' ? 'active' : ''} onClick={() => setActiveTab('user')}>User Management</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

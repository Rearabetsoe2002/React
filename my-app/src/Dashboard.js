import React, { useState } from 'react';
import ProductManagement from './ProductManagement';
import UserManagement from './UserManagement';
import NavBar from './NavBar';

function Dashboard({ currentUser, setCurrentUser }) {
  const [activeTab, setActiveTab] = useState('product');

  const handleSignOut = () => {
    setCurrentUser(null);
  };

  return (
    <div className="dashboard">
      <header>
      </header>
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="content">
        {activeTab === 'product' ? <ProductManagement /> : <UserManagement />}
      </div>
      <footer>
        <button id="signout" onClick={handleSignOut}>Sign out</button>
      </footer>
    </div>
  );
}

export default Dashboard;

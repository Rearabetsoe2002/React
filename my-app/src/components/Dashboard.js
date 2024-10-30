// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Dashboard() {
    return (
        <div className="dashboard-bg">
            <header>
                <h1>Dashboard</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/product-management">Product Management</Link>
                    <Link to="/login">Logout</Link>
                </nav>
            </header>
            <main>
                <section className="dashboard-section">
                    <h2>Welcome to your dashboard</h2>
                    <p>Here you can manage your account and view your orders.</p>
                </section>
            </main>
        </div>
    );
}

export default Dashboard;

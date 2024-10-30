// Login.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Login() {
    return (
        <div className="login-bg">
            <header>
                <h1>Login</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/register">Register</Link>
                </nav>
            </header>
            <main>
                <section className="login-section">
                    <form>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" required />

                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required />

                        <button type="submit">Login</button>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default Login;

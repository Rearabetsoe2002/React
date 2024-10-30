// Register.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Register() {
    return (
        <div className="register-bg">
            <header>
                <h1>Register</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                </nav>
            </header>
            <main>
                <section className="register-section">
                    <form>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" required />

                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required />

                        <button type="submit">Register</button>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default Register;

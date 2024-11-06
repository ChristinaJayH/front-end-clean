// src/pages/login/CleanerLogin.tsx
import React from "react";
import { Link } from "react-router-dom";

const CleanerLogin: React.FC = () => {
    return (
        <div>
            <h1>Cleaner Login</h1>
            <form>
                <div>
                    <label htmlFor="cleaner-email">Email:</label>
                    <input type="email" id="cleaner-email" required />
                </div>
                <div>
                    <label htmlFor="cleaner-password">Password:</label>
                    <input type="password" id="cleaner-password" required />
                </div>
                <button type="submit">Login</button>
            </form>
            <Link to="/login/admin">Login as Admin</Link>
            <Link to="/login/customer">Login as Customer</Link>
        </div>
    );
};

export default CleanerLogin;  // Ensure this line is present

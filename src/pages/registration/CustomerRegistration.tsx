import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerRegistration: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate(); // Hook for navigation

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const customerData = {
            username,
            passwordHash: password,
            phoneNumber,
            email,
        };

        try {
            const response = await fetch('http://localhost:8080/api/customers/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(customerData),
            });

            if (response.ok) {
                alert('Registration successful!');
                navigate('/dashboard'); // Redirect to the dashboard after successful registration
            } else {
                const errorMessage = await response.text();
                alert(`Registration failed: ${errorMessage}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during registration');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div>
                <label>Phone Number:</label>
                <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default CustomerRegistration;

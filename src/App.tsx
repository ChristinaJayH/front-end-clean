import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Questionnaire from "./components/questionnaire/Questionnaire";
import AdminLogin from "./pages/login/AdminLogin";
import CleanerLogin from "./pages/login/CleanerLogin";
import CustomerLogin from "./pages/login/CustomerLogin";
import AdminDashboard from "./pages/dashboard/admin/AdminDashboard"; 
import CustomerRegistration from "./pages/registration/CustomerRegistration";
import CustomerDashboard from "./pages/dashboard/customer/CustomerDashboard";

const App: React.FC = () => {
    // State to manage the authentication status
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    // Function to handle successful login
    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    // Function to handle logout
    const handleLogout = () => {
        setIsAuthenticated(false);
    };
    const ProtectedRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
        const token = localStorage.getItem('token');
        return token ? children : <Navigate to="/login" />;
    };

    return (
        <Router>
            <Routes>
                <Route path="/price-calculator" element={<Questionnaire />} />
                <Route path="/login/admin" element={<AdminLogin onLogin={handleLogin} />} />
                <Route path="/login/cleaner" element={<CleanerLogin />} />
                <Route path="/login/customer" element={<CustomerLogin />} />
                <Route path="/register" element={<CustomerRegistration />} />
            

           {/* Below are two different ways you can implement protected routes.  */}
           
                <Route
    path="/dashboard"
    element={
        <ProtectedRoute>
            <CustomerDashboard />
        </ProtectedRoute>
    }
/>
                {/* Protected Route */}
                <Route 
                    path="/admin/dashboard" 
                    element={isAuthenticated ? <AdminDashboard /> : <Navigate to="/login/admin" />} 
                />
                {/* Redirect to Dashboard if logged in */}
                <Route path="/" element={isAuthenticated ? <Navigate to="/admin/dashboard" /> : <Navigate to="/login/admin" />} />
            </Routes>
        </Router>
    );
};

export default App;

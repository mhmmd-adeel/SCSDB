// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  // Get initial auth status from localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem('isAuthenticated') === 'true'
  );

  // Login function
  const login = async (email, password) => {
    try {
      console.log("User logged in successfully");
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
      toast.success("User logged in successfully!", { position: 'top-center' });
    } catch (error) {
      console.log("Error:", error.message);
      toast.error(error.message, { position: 'bottom-center' });
    }
  };

  // Signup function
  const signup = async (email, password, name) => {
    try {
      console.log("User registered successfully");
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
      toast.success("User registered successfully!", { position: 'top-center' });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, { position: 'bottom-center' });
    }
  };

  // Logout function
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    toast.success("Logged out successfully!", { position: 'top-center' });
    console.log('User logged out');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

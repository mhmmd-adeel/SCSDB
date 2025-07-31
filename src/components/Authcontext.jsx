// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

import { toast } from 'react-toastify';

// Create the authentication context
const AuthContext = createContext();

// Custom hook to use AuthContext more easily
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
 
  
  

  // Login function
  const login = async (email, password) => {
    try {
      console.log("User logged in successfully");
      setIsAuthenticated(true);
      
      toast.success("User logged in successfully!", { position: 'top-center' });
    } catch (error) {
      console.log("Error:", error.message);
      toast.error(error.message, { position: 'bottom-center' });
    }
  };

  // Signup function
  const signup = async (email, password,name) => {
    try {
      console.log("User registered successfully");
      
      setIsAuthenticated(true);
      toast.success("User registered successfully!", { position: 'top-center' });
      
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, { position: 'bottom-center' });
    }
  };

  // Logout function
  const logout = async () => {
    try {
      setIsAuthenticated(false);
    
      toast.success("Logged out successfully!", { position: 'top-center' });
      console.log('User logged out');
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, { position: 'bottom-center' });
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, signup, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

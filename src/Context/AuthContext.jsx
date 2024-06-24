import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isLoggedIn: false,
    isAdminLogin: false,
    formCount: 0, // Initialize formCount state
    totalForm: 0, // Initialize totalForm state
    username:'',
    usernames:'',
    fullname:'',
    email:'',
    password:'',
  });

  const login = (username,usernames, formCount, totalForm) => {
    setAuthState({
      ...authState,
      isLoggedIn: true,
      isAdminLogin: true,
      formCount, // Set formCount in auth state
      totalForm, // Set totalForm in auth state
      username,
      usernames,
    });
  };

  const logout = () => {
    setAuthState({
      isLoggedIn: false,
      isAdminLogin: false,
      formCount: 0, // Reset formCount on logout
      totalForm: 0, // Reset totalForm on logout
      username:'',
      usernames:''
    });
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

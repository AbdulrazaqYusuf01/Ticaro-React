/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("ticket_session");
    if (token) {
      try {
        const userData = JSON.parse(token);
        setUser(userData);
      } catch (err) {
        console.error(err);
        localStorage.removeItem("ticket_session");
      }
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    const sessionData = { ...userData, timestamp: Date.now() };
    localStorage.setItem("ticket_session", JSON.stringify(sessionData));
    setUser(sessionData);
  };

  const logout = () => {
    localStorage.removeItem("ticket_session");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

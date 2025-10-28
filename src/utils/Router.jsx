import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import Dashboard from "../pages/Dashboard";
import TicketManagement from "../pages/TicketManagement";

const Router = () => {
  const [route, setRoute] = useState(window.location.hash.slice(1) || "/");
  const { user, loading } = useAuth();

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash.slice(1) || "/");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (!loading) {
      const protectedRoutes = ["/dashboard", "/tickets"];
      const isProtected = protectedRoutes.some((r) => route.startsWith(r));

      if (isProtected && !user) {
        window.location.hash = "#/auth/login";
      }
    }
  }, [route, user, loading]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  // Route mapping
  if (route === "/" || route === "") return <LandingPage />;
  if (route === "/auth/login") return <LoginPage />;
  if (route === "/auth/signup") return <SignupPage />;
  if (route === "/dashboard") return <Dashboard />;
  if (route === "/tickets") return <TicketManagement />;

  return <LandingPage />;
};

export default Router;

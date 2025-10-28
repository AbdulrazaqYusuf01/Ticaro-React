import React, { useState } from "react";
import { Menu, LogOut } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-[1440px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#/" className="text-2xl font-bold text-indigo-600">
            Ticaro
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {user ? (
              <>
                <a
                  href="#/dashboard"
                  className="text-gray-700 hover:text-indigo-600"
                >
                  Dashboard
                </a>
                <a
                  href="#/tickets"
                  className="text-gray-700 hover:text-indigo-600"
                >
                  Tickets
                </a>
                <button
                  onClick={logout}
                  className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <a
                  href="#/auth/login"
                  className="text-gray-700 hover:text-indigo-600"
                >
                  Login
                </a>
                <a
                  href="#/auth/signup"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
                >
                  Sign Up
                </a>
              </>
            )}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            <Menu />
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-3 pb-4">
            {user ? (
              <>
                <a
                  href="#/dashboard"
                  className="text-gray-700 hover:text-indigo-600 py-2"
                >
                  Dashboard
                </a>
                <a
                  href="#/tickets"
                  className="text-gray-700 hover:text-indigo-600 py-2"
                >
                  Tickets
                </a>
                <button
                  onClick={logout}
                  className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 w-full justify-center"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <a
                  href="#/auth/login"
                  className="text-gray-700 hover:text-indigo-600 py-2"
                >
                  Login
                </a>
                <a
                  href="#/auth/signup"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 text-center"
                >
                  Sign Up
                </a>
              </>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

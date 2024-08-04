import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Define navigation items
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/articles", label: "Articles" },
    // { path: "/categories", label: "Categories" },
    // { path: "/help", label: "Help" },
  ];

  return (
    <nav className="bg-white shadow-md text-heading p-2">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-xl font-semibold">Insight Haven</h1>
        </div>

        {/* Menu Items (Desktop) */}
        <div className="hidden lg:flex flex-grow justify-center space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => {
                return isActive
                  ? "border-b-2 border-btnHover py-1"
                  : "hover:border-b-2 hover:border-btnHover py-1";
              }}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Auth and Profile (Desktop) */}
        <div className="hidden lg:flex items-center space-x-6">
          {isAuthenticated ? (
            <Link
              to="/auth/profile"
              className="py-2 px-4 rounded-md bg-btnHover text-white hover:bg-btnHoverDark transition-colors"
            >
              Profile
            </Link>
          ) : (
            <Link
              to="/auth/login"
              className="py-2 px-4 rounded-md bg-btnHover text-white hover:bg-btnHoverDark transition-colors"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-heading text-2xl">
            {isOpen ? "✖️" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${
          isOpen ? "block" : "hidden"
        } bg-sectionBg text-heading`}
      >
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="block py-2 px-4 rounded-md hover:bg-btnHover transition-colors"
          >
            {item.label}
          </Link>
        ))}
        <div className="mt-4">
          {isAuthenticated ? (
            <Link
              to="/profile"
              className="block py-2 px-4 rounded-md bg-btnHover text-white hover:bg-btnHoverDark transition-colors"
            >
              Profile
            </Link>
          ) : (
            <Link
              to="/login"
              className="block py-2 px-4 rounded-md bg-btnHover text-white hover:bg-btnHoverDark transition-colors"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

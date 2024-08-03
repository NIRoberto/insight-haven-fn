import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Define navigation items
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/articles", label: "Articles" },
    { path: "/categories", label: "Categories" },
    { path: "/profile", label: "Profile" },
    { path: "/help", label: "Help" },
  ];

  return (
    <nav className="bg-sectionBg text-heading">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-xl font-semibold">Insight Haven</h1>
        </div>

        {/* Menu Items (Desktop) */}
        <div className="hidden lg:flex flex-grow justify-center space-x-6">
          {navItems.slice(0, 3).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="py-2 px-4 rounded-md hover:bg-btnHover transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Auth and Profile (Desktop) */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.slice(3).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="py-2 px-4 rounded-md hover:bg-btnHover transition-colors"
            >
              {item.label}
            </Link>
          ))}
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
      </div>
    </nav>
  );
};

export default Navbar;

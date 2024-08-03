import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer: React.FC = () => {
  // Define navigation and social media items using arrays
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/articles", label: "Articles" },
    { path: "/categories", label: "Categories" },
    { path: "/profile", label: "Profile" },
    { path: "/help", label: "Help" },
  ];

  const socialMediaItems = [
    { href: "#", icon: <FaFacebookF />, label: "Facebook" },
    { href: "#", icon: <FaTwitter />, label: "Twitter" },
    { href: "#", icon: <FaInstagram />, label: "Instagram" },
    { href: "#", icon: <FaLinkedinIn />, label: "LinkedIn" },
  ];

  return (
    <footer className="bg-sectionBg text-heading py-8">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row lg:justify-between lg:items-center">
        {/* Logo and Copyright */}
        <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
          <h2 className="text-2xl font-bold mb-2">Insight Haven</h2>
          <p className="text-sm">© 2024 Insight Haven. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col lg:flex-row lg:space-x-8 mb-8 lg:mb-0">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="py-2 px-4 rounded-md text-center hover:bg-btnHover transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="flex flex-col items-center lg:items-end">
          <h3 className="text-lg font-semibold mb-2">
            Subscribe to Our Newsletter
          </h3>
          <form className="flex flex-col lg:flex-row w-full max-w-sm">
            <input
              type="email"
              placeholder="Your email address"
              className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-btnHover mb-2 lg:mb-0 lg:mr-2 w-full lg:w-auto"
            />
            <button
              type="submit"
              className="bg-btnHover text-white py-2 px-4 rounded-md hover:bg-btnHover transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="bg-sectionBg text-heading py-4 mt-8">
        <div className="container mx-auto flex flex-col lg:flex-row lg:justify-center space-y-4 lg:space-y-0 lg:space-x-6">
          {socialMediaItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-btnHover hover:text-white transition-colors flex items-center"
              aria-label={item.label}
            >
              <span className="mr-2 text-lg">{item.icon}</span>
              <span className="hidden lg:inline">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

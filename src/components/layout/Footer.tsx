import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer: React.FC = () => {
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
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-w-[80%] px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">
              Insight Haven
            </h2>
            <p className="text-sm mb-4">
              Insight Haven is your go-to source for the latest insights and
              trends in technology, science, and innovation. Stay updated with
              our expert articles and engaging content.
            </p>
            <h3 className="text-lg font-semibold mb-2 text-white">Follow Us</h3>
            <div className="flex space-x-4">
              {socialMediaItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul>
              {navItems.map((item) => (
                <li key={item.path} className="mb-2">
                  <Link
                    to={item.path}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-sm mb-4">
              Get the latest updates and articles directly to your inbox.
            </p>
            <form className="flex flex-col p-4 sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 mb-2 sm:mb-0 sm:mr-2 w-[100%] sm:w-[100%]"
              />
              <button
                type="submit"
                className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <ul className="text-sm">
              <li className="mb-2">
                <strong>Email:</strong> contact@insighthaven.com
              </li>
              <li className="mb-2">
                <strong>Phone:</strong> +1 234 567 890
              </li>
              <li className="mb-2">
                <strong>Address:</strong> 123 Tech Lane, Silicon Valley, CA
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">© 2024 Insight Haven. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {socialMediaItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

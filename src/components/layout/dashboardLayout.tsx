import { Outlet, NavLink } from "react-router-dom";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const navItems = [
  {
    path: "/dashboard/stat",
    label: "Dashboard",
  },
  { path: "/dashboard/articles", label: "Articles" },
  { path: "/dashboard/categories", label: "Categories" },
  { path: "/dashboard/users", label: "Users" },
  { path: "/dashboard/settings", label: "Settings" },
];

const Sidebar: React.FC = () => {
  return (
    <div className="bg-dark text-white bg-buttonBg rounded-3xl m-1 w-64 min-h-screen flex flex-col items-center justify-between">
      <div>
        <div className="mb-8">
          <h1 className="text-3xl text-white mt-8 font-bold">Insight Haven</h1>
        </div>
        <nav className="flex ">
          <ul className="flex flex-col items-start justify-start  mt-4 w-full">
            {navItems.map((item) => (
              <li className="mb-4 w-full" key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? "font-bold" : "")}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <button className="w-full py-2 bg-buttonBg hover:bg-buttonBg text-white font-bold rounded">
          Logout
        </button>
      </div>
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white border  rounded-3xl p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div>.</div>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center focus:outline-none"
          >
            <FaUserCircle className=" text-3xl" />
            <div className="flex  ml-2 flex-col text-sm items-start justify-start">
              <span>User Name</span>
              <span>Admin</span>
            </div>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
              <Link
                to="/edit-profile"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Edit Profile
              </Link>
              <button
                onClick={() => console.log("Logout")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

function DashboardLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;

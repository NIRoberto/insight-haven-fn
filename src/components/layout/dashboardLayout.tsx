import { Outlet, NavLink } from "react-router-dom";
import React from "react";

const navItems = [
  { path: "/dashboard/articles", label: "Articles" },
  { path: "/dashboard/categories", label: "Categories" },
  { path: "/dashboard/users", label: "Users" },
  { path: "/dashboard/settings", label: "Settings" },
];

const Sidebar: React.FC = () => {
  return (
    <div className="bg-dark text-white bg-black w-64 min-h-screen p-4 flex flex-col justify-between">
      <div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center mt-4">
            Insight 
          </h2>
        </div>
        <nav>
          <ul className="flex flex-col mt-4">
            {navItems.map((item) => (
              <li className="mb-4" key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "text-btnHover" : "hover:text-btnHover"
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <button className="w-full py-2 bg-red-500 hover:bg-red-700 text-white font-bold rounded">
          Logout
        </button>
      </div>
    </div>
  );
};

function DashboardLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <h1 className="text-4xl font-bold text-heading mb-8">Dashboard</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;

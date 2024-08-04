import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/home";
import ArticlePage from "./pages/singleArticle";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import DashboardLayout from "./components/layout/dashboardLayout";
import Categories from "./pages/dashboard/categories";
import Articles from "./pages/dashboard/articles";
import Users from "./pages/dashboard/users";

const AuthLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-heading">
            Insight Haven
          </Link>
          <Link to="/" className="text-blue-500 hover:underline">
            &larr; Back
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-1">
          <h1 className="text-3xl font-bold text-heading text-center mb-2">
            <Outlet />
          </h1>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-white text-center py-4 shadow-md">
        <p className="text-sm text-gray-600">
          © 2024 Insight Haven. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

function MainLayout() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <div className="mt-8 min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/article/:id",
        element: <ArticlePage />,
      },

      {
        path: "/articles",
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <DashboardPage />,
      },

      {
        path: "articles",
        element: <Articles />,
      },

      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "settings",
        element: <DashboardPage />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);

function DashboardPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-heading font-raleway mt-20">
        Dashboard Page
      </h1>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-heading font-raleway mt-20">
        Not Found
      </h1>
    </div>
  );
}

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

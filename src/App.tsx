import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/home";
import ArticlePage from "./pages/singleArticle";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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

function DashboardLayout() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-heading font-raleway mt-20">
        <Outlet />
      </h1>
    </div>
  );
}

function AuthLayout() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-heading font-raleway mt-20">
        <Outlet />
      </h1>
    </div>
  );
}

function LoginPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-heading font-raleway mt-20">
        Login Page
      </h1>
    </div>
  );
}

function RegisterPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-heading font-raleway mt-20">
        Register Page
      </h1>
    </div>
  );
}

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

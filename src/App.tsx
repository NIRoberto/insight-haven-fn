import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
  useParams,
} from "react-router-dom";
import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/home";
import ArticlePage from "./pages/singleArticle";

function MainLayout() {
  return (
    <div>
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
    path: "/",
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
        path: "/other",
        element: <OtherLayout />,
      },
    ],
  },
]);

function OtherLayout() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-heading font-raleway mt-20">
        Other Layout
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
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

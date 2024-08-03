import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  useParams,
} from "react-router-dom";
import React from "react";
import "./App.css";

function MainLayout({}: // children,
{
  // children: React.ReactNode;
}) {
  return (
    <div>
      <nav className="flex justify-center space-x-4 mt-4">
        <Link to="/" className="text-blue-500">
          Home
        </Link>
        <Link to="/post/1" className="text-blue-500">
          Post
        </Link>
        <Link to="/other" className="text-blue-500">
          Other
        </Link>
      </nav>
      <div className="mt-8">
        <Outlet />
      </div>
    </div>
  );
}

function AuthLayout() {
  return (
    <div>
      <nav className="flex justify-center space-x-4 mt-4">
        <Link to="/" className="text-blue-500">
          Home
        </Link>
        <Link to="/post/1" className="text-blue-500">
          Post
        </Link>
        <Link to="/other" className="text-blue-500">
          Other
        </Link>
      </nav>
      <div className="mt-8">
        <Outlet />
      </div>
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
        element: <HomePage />,
      },
      {
        path: "/post/:id",
        element: <SinglePostPage />,
      },
      {
        path: "/other",
        element: <OtherLayout />,
      },
    ],
  },
]);

function HomePage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-heading font-raleway mt-20">
        Home
      </h1>
    </div>
  );
}

function SinglePostPage() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-heading font-raleway mt-20">
        Single Post
      </h1>
    </div>
  );
}

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

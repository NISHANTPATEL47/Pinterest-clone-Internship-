import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/login.jsx";
import Registration from "./pages/registration.jsx";
import Add from "./pages/add.jsx";
import App from "./App.jsx";
import Feed from "./pages/feed.jsx";
import "./main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error-page.jsx";
import Show from "./pages/show.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Registration",
    element: <Registration />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/App",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Add",
    element: <Add />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/show/post",
    element: <Show />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/feed",
    element: <Feed />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

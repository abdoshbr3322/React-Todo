// import react
import React from "react";
import ReactDOM from "react-dom/client";

// import pages, components, and App component
import App from "./App";
import ErrorPage from "./pages/error_page/ErrorPage";
import Home from "./pages/home/Home";

// import react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// create routers
const router = createBrowserRouter([
  {
    path: "/React-Todo",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },      
    ],
  },
]);


// render App component
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

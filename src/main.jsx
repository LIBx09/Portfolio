import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import PortfolioDetails from "./components/PortfolioDetails/PortfolioDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details/:id",
    element: <PortfolioDetails />,
    // loader: async ({ params }) => {
    //   const response = await fetch(`project.json/${params.id}`);
    //   const projectDetail = await response.json();
    //   return projectDetail;
    // },
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

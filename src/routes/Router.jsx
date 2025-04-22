import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import FoodMenu from "../pages/FoodMenu";
import Order from "../pages/Order";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout component will hold the Outlet
    children: [
      {
        index: true, // Matches the root path: "/" and renders Home inside the Outlet
        element: <Home />,
      },
      {
        path: "courses", // Nested route for /courses
        element: <Courses />,
      },
      {
        path: "menu", // Nested route for /menu
        element: <FoodMenu />,
      },
      {
        path: "order", // Nested route for /order
        element: <Order />,
      },
      {
        path: "contact", // Nested route for /contact
        element: <Contact />,
      },
    ],
  },
]);

export default router;

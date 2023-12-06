import { createBrowserRouter } from "react-router-dom";
import Courses from "../src/pages/Courses.tsx";
import Login from "./Features/components/Login";
import Register from "./Features/components/Regiester";
import IdentityLayout from "./Layouts/IdentityLayout.tsx";
import MainLayout from "./Layouts/Main/MainLayout.tsx";
import Home from "./pages/Home.tsx";
import Public from "./pages/Public.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, //protected routes
    children: [
      {
        element: <Courses />,
        index: true,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
  {
    element: <IdentityLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/public",
    element: <Public />, //public page
  },
]);
export default router;

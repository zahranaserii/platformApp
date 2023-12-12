import { createBrowserRouter } from "react-router-dom";
import Courses from "../src/pages/Courses.tsx";
import Login from "./Features/components/Login.tsx";
import Register from "./Features/components/Register.tsx";
import AuthLayout from "./Layouts/AuthLayout.tsx";
import MainLayout from "./Layouts/Main/MainLayout.tsx";
import CourseCategory from "./pages/CourseCategory.tsx";
import CourseDetail from "./pages/CourseDetail.tsx";
import ProtectAuthRoute from "./pages/ProtectAuthRoute.tsx";
import ProtectPrivateRoutes from "./pages/ProtectPrivateRoutes.tsx";
import Public from "./pages/Public.tsx";
const router = createBrowserRouter([
  {
    element: <ProtectPrivateRoutes />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            element: <Courses />,
            index: true,
          },
          {
            path: "/courses/:id",
            element: <CourseDetail />,
          },
          {
            element: <CourseCategory />,
            path: "courseCategory",
          },
        ],
      },
    ],
  },
  {
    element: <ProtectAuthRoute />,
    children: [
      {
        path: "/",
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ],
      },
    ],
  },
  {
    element: <Public />,
    path: "/public",
  },
  { path: "*", element: <p>not found</p> },
]);
export default router;

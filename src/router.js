import { createBrowserRouter } from "react-router-dom";
import Login from "./Features/components/Login.tsx";
import Register from "./Features/components/Register.tsx";
import AuthLayout from "./Layouts/AuthLayout.tsx";
import MainLayout from "./Layouts/Main/MainLayout.tsx";
import CourseCategory from "./pages/Course/CourseCategory.tsx";
import CourseDetail from "./pages/Course/CourseDetail.tsx";
import Courses from "./pages/Course/Courses.tsx";
import NotFound from "./pages/NotFound.tsx";
import ProtectAuthRoute from "./pages/ProtectAuthRoute.tsx";
import ProtectPrivateRoutes from "./pages/ProtectPrivateRoutes.tsx";
import Public from "./pages/Public.tsx";
import ProductShop from "./pages/Shop/ProductShop.tsx";
import ShoppingCart from "./pages/Shop/ShoppingCart.tsx";
import UnExceptionHandler from "./pages/unExpectentionHandler.tsx";
import MainMap from "./pages/Map/MainMap.tsx"
const router = createBrowserRouter([
  {
    element: <ProtectPrivateRoutes />,
    errorElement: <UnExceptionHandler />,
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
          {
            element: <ProductShop />,
            path: "shop",
          },
          {
            element: <ShoppingCart />,
            path: "cart",
          },
          {
            element: <MainMap />,
            path: "map",
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
  { path: "*", element: <NotFound /> },
]);
export default router;

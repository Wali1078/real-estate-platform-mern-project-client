import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllProperty from "../pages/AllProperty/AllProperty";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import LoginPrivate from "./LoginPrivate";
import DashboardLayout from "../layouts/DashboardLayout";
import MyProfile from "../pages/Dashboard/Common/MyProfile/MyProfile";
import WishList from "../pages/Dashboard/User/WishList/WishList";
import PropertyBought from "../pages/Dashboard/User/PropertyBought/PropertyBought";
import MyReviews from "../pages/Dashboard/User/MyReviews/MyReviews";

const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "all-property",
        element: (
          <PrivateRoute>
            <AllProperty />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "login",
    element: (
      <LoginPrivate>
        <Login />
      </LoginPrivate>
    ),
  },
  {
    path: "signup",
    element: (
      <LoginPrivate>
        <Signup />
      </LoginPrivate>
    ),
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <MyProfile />,
      },
      {
        path: "wishlist",
        element: <WishList />,
      },
      {
        path: "property-bought",
        element: <PropertyBought />,
      },
      {
        path: "my-reviews",
        element: <MyReviews />,
      },
    ],
  },
]);

export default MainRoutes;

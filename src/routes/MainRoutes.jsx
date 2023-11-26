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
import AddProperty from "../pages/Dashboard/Agent/AddProperty/AddProperty";
import MyAddedProperties from "../pages/Dashboard/Agent/MyAddedProperties/MyAddedProperties";
import MySoldProperties from "../pages/Dashboard/Agent/MySoldProperties/MySoldProperties";
import RequestedProperties from "../pages/Dashboard/Agent/RequestedProperties/RequestedProperties";
import ManageProperties from "../pages/Dashboard/Admin/ManageProperties/ManageProperties";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import ManageReviews from "../pages/Dashboard/Admin/ManageReviews/ManageReviews";
import AdminRoute from "./AdminRoute";

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
        element:  <PrivateRoute><MyProfile /></PrivateRoute>,
      },
      // user route
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
      // agent route
      {
        path: "add-property",
        element: <AddProperty />,
      },
      {
        path: "added-properties",
        element: <MyAddedProperties/>,
      },
      {
        path: "sold-properties",
        element: <MySoldProperties />,
      },
      {
        path: "requested-properties",
        element: <RequestedProperties />,
      },
      // admin route
      {
        path: "manage-properties",
        element: <ManageProperties />,
      },
      {
        path: "manage-users",
        element: <AdminRoute><ManageUsers /></AdminRoute>,
      },
      {
        path: "manage-reviews",
        element: <ManageReviews />,
      }
      
    ],
  },
]);

export default MainRoutes;

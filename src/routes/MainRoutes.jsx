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
import AgentRoute from "./AgentRoute";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";
import {  getSingleProperty, getSingleWishlist } from "../api/properties";
import UpdateProperty from "../pages/Dashboard/Agent/UpdateProperty/UpdateProperty";
import MakeAnOffer from "../pages/Dashboard/User/MakeAnOffer/MakeAnOffer";
import Payment from "../pages/Dashboard/User/Payment/Payment";

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
      {
        path: "property-details/:id",
        element: (
          <PrivateRoute>
            <PropertyDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => getSingleProperty(params.id),
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
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      // user route
      {
        path: "wishlist",
        element: (
          <PrivateRoute>
            <WishList />
          </PrivateRoute>
        ),
      },
      {
        path: "wishlist/make-offer/:id",
        element: (
          <PrivateRoute>
            <MakeAnOffer />
          </PrivateRoute>
        ),
        loader: ({ params }) => getSingleWishlist(params.id),
      },
      {
        path: "property-bought",
        element: (
          <PrivateRoute>
            <PropertyBought />
          </PrivateRoute>
        ),
        
      },
      {
        path: "/dashboard/property-bought/payment/:id",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
        loader: ({ params }) => getSingleWishlist(params.id),
      },
      {
        path: "my-reviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      // agent route
      {
        path: "add-property",
        element: (
          <PrivateRoute>
            <AgentRoute>
              <AddProperty />
            </AgentRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "added-properties",
        element: (
          <PrivateRoute>
            <AgentRoute>
              <MyAddedProperties />
            </AgentRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "update-property/:id",
        element: (
          <PrivateRoute>
            <AgentRoute>
              <UpdateProperty />
            </AgentRoute>
          </PrivateRoute>
        ),
        loader: ({ params }) => getSingleProperty(params.id),
      },
      {
        path: "sold-properties",
        element: (
          <PrivateRoute>
            <AgentRoute>
              <MySoldProperties />
            </AgentRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "requested-properties",
        element: (
          <PrivateRoute>
            <AgentRoute>
              <RequestedProperties />
            </AgentRoute>
          </PrivateRoute>
        ),
      },
      // admin route
      {
        path: "manage-properties",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageProperties />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-reviews",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageReviews />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default MainRoutes;

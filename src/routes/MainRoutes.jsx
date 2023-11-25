import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllProperty from "../pages/AllProperty/AllProperty";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import LoginPrivate from "./LoginPrivate";

const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "all-property",
        element: <PrivateRoute><AllProperty /></PrivateRoute>,
      },
    ],
  },
  {
    path: "login",
    element: <LoginPrivate><Login /></LoginPrivate>,
  },
  {
    path: "signup",
    element: <LoginPrivate><Signup /></LoginPrivate>,
  },
]);

export default MainRoutes;

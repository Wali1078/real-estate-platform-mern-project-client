import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";

const LoginPrivate = ({ children }) => {
  const { user, loading } = useAuth();

  if (user) {
    return <Navigate to="/"></Navigate>;
  }
  return children;
};
LoginPrivate.propTypes = {
  children: PropTypes.node,
};
export default LoginPrivate;
